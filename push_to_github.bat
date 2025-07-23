@echo off
echo Configuring Git user...
git config --global user.name "Rana Ranveer Kumar Yadav"
git config --global user.email "ranveer30654@gmail.com"

echo Initializing Git repository...
git init

echo Adding all files to Git...
git add .

echo Committing changes...
git commit -m "Initial commit"

echo Adding GitHub remote repository...
git remote add origin https://github.com/ranveer2312/IDMS.git

echo Pushing to GitHub...
git push -u origin main

echo Done! Your code has been pushed to GitHub.
pause