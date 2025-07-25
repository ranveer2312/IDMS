@echo off
echo Stopping any Java processes...
taskkill /f /im java.exe 2>nul
timeout /t 2 /nobreak >nul
echo Deleting target directory...
rmdir /s /q target
echo Done!
pause