#!/usr/bin/env bash
# Quick helper to build and run backend locally (requires Maven)
mvn -f backend/pom.xml -DskipTests package
java -jar backend/target/*.jar
