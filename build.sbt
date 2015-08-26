import play.PlayImport.PlayKeys.playRunHooks

name := "play-react"

organization := "br.com.exemplo"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

libraryDependencies ++= Seq(
	jdbc,
	"com.typesafe.play" %% "anorm" % "2.4.0",
	"org.postgresql" % "postgresql" % "9.4-1201-jdbc41"
)

// run gulp
playRunHooks += RunSubProcess("webpack -w")