@echo off
echo Fixing repository structure...

echo Removing any existing .git directories in subfolders...
if exist IDMSbackend\.git (
    rmdir /s /q IDMSbackend\.git
    echo Removed .git from IDMSbackend
)

if exist IDMSProject\.git (
    rmdir /s /q IDMSProject\.git
    echo Removed .git from IDMSProject
)

echo Re-adding all files to Git...
git add -A

echo Committing changes...
git commit -m "Fix repository structure to include all project files"

echo Pushing to GitHub...
git push

echo Done! Your complete project should now be on GitHub.
pause