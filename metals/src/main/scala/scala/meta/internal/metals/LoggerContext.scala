package scala.meta.internal.metals

import java.nio.file.Path

object LoggerReporter extends Reporter {

  override def create(report: => Report, ifVerbose: Boolean): Option[Path] = {
    scribe.info(s"Report ${report.name}: ${report.fullText}")
    None
  }

  override def cleanUpOldReports(maxReportsNumber: Int): List[ReportFile] =
    List()

  override def getReports(): List[ReportFile] = List()

  override def deleteAll(): Unit = {}
}

object LoggerReportContext extends ReportContext {

  override def unsanitized: Reporter = LoggerReporter

  override def incognito: Reporter = LoggerReporter

  override def bloop: Reporter = LoggerReporter
}
