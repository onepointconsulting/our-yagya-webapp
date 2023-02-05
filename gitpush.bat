@echo off

echo Checking the status of the repository...
git status

echo Adding all changes to the repository...
git add .

set /p message="Enter the commit message: "
echo Committing changes with the message "%message%"...
git commit -m "%message%"

echo Pushing changes to the remote repository...
git push

echo Done!
