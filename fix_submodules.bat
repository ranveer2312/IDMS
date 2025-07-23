@echo off
echo Fixing submodule issues...

echo Removing IDMSbackend and IDMSProject from Git index...
git rm --cached IDMSbackend
git rm --cached IDMSProject

echo Re-adding all files to Git...
git add -A

echo Committing changes...
git commit -m "Fix submodule issues and include all project files"

echo Pushing to GitHub...
git push

echo Done! Your complete project should now be on GitHub.
pause