@echo off
echo Removing .git directories from subfolders...

echo Removing .git from IDMSbackend...
rmdir /s /q IDMSbackend\.git

echo Removing .git from IDMSProject...
rmdir /s /q IDMSProject\.git

echo Removing subfolders from Git index...
git rm --cached IDMSbackend
git rm --cached IDMSProject

echo Re-adding all files to Git...
git add -A

echo Committing changes...
git commit -m "Remove nested .git directories and add all project files"

echo Pushing to GitHub...
git push

echo Done! Your complete project should now be on GitHub.
pause