@echo off
echo Checking for hidden .git directories...

if exist "IDMSbackend\.git" (
    echo Found .git directory in IDMSbackend
) else (
    echo No .git directory in IDMSbackend
)

if exist "IDMSProject\.git" (
    echo Found .git directory in IDMSProject
) else (
    echo No .git directory in IDMSProject
)

pause