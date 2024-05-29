package scala.meta.internal.pc

import java.nio.file.Paths

import scala.collection.mutable.ListBuffer

import scala.meta.internal.mtags.MtagsEnrichments.*
import scala.meta.pc.OffsetParams

import dotty.tools.dotc.ast.tpd
import dotty.tools.dotc.core.Contexts.Context
import dotty.tools.dotc.core.Flags
import dotty.tools.dotc.core.Types.MethodType
import dotty.tools.dotc.interactive.Interactive
import dotty.tools.dotc.interactive.InteractiveDriver
import dotty.tools.dotc.util.SourceFile
import org.eclipse.lsp4j as l

final class ConvertToNamedArgumentsProvider(
    driver: InteractiveDriver,
    params: OffsetParams,
    argIndices: Set[Int],
):

  val utils = new ConvertToNamedArgumentsUtils(params.text())

  def convertToNamedArguments: Either[String, List[l.TextEdit]] =
    val uri = params.uri
    val filePath = Paths.get(uri)
    driver.run(
      uri,
      SourceFile.virtual(filePath.toString, params.text),
    )
    val unit = driver.latestRun
    val newctx = driver.currentCtx.fresh.setCompilationUnit(unit)
    val pos = driver.sourcePosition(params)
    val trees = driver.openedTrees(uri)
    val tree = Interactive.pathTo(trees, pos)(using newctx).headOption

    def paramss(fun: tpd.Tree)(using Context): List[String] =
      fun.tpe match
        case m: MethodType => m.paramNamess.flatten.map(_.toString)
        case _ =>
          fun.symbol.rawParamss.flatten
            .filter(!_.isTypeParam)
            .map(_.nameBackticked)

    object FromNewApply:
      def unapply(tree: tpd.Tree): Option[(tpd.Tree, List[tpd.Tree])] =
        tree match
          case fun @ tpd.Select(tpd.New(_), _) =>
            Some((fun, Nil))
          case tpd.TypeApply(FromNewApply(fun, argss), _) =>
            Some(fun, argss)
          case tpd.Apply(FromNewApply(fun, argss), args) =>
            Some(fun, argss ++ args)
          case _ => None

    def edits(tree: Option[tpd.Tree])(using
        Context
    ): Either[String, List[l.TextEdit]] =
      def makeTextEdits(fun: tpd.Tree, args: List[tpd.Tree], argsEnd: Int) =
        if fun.symbol.is(Flags.JavaDefined) then
          Left(CodeActionErrorMessages.ConvertToNamedArguments.IsJavaObject)
        else {
          var prevArgEnd: Int = fun.span.end
          val edits: ListBuffer[l.TextEdit] = new ListBuffer()
          for (((arg, index), param) <- args.zipWithIndex.zip(paramss(fun))) {
            if (argIndices.contains(index)) {
              val start = utils.findActualArgBeginning(prevArgEnd, arg.span.start)
              val position = arg.sourcePos.withStart(start).withEnd(start).toLsp
              edits += new l.TextEdit(position, s"$param = ")
            }
            prevArgEnd = utils.findActualArgEnd(arg.span.end, argsEnd)
          }
          Right(edits.result())
        }

      tree match
        case Some(t) =>
          t match
            case app @ FromNewApply(fun, args) =>
              makeTextEdits(fun, args, app.span.end)
            case app @ tpd.Apply(fun, args) =>
              makeTextEdits(fun, args, app.span.end)
            case _ => Right(Nil)
        case _ => Right(Nil)
      end match
    end edits
    edits(tree)(using newctx)
  end convertToNamedArguments
end ConvertToNamedArgumentsProvider
