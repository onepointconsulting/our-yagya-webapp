#!/bin/sh

if [ $# -eq 0 ]
  then
    echo "No commit message provided"
  else
    git status
    git add . && git commit -m "$1" && git push origin main
fi