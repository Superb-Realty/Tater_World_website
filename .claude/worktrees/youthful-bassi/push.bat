@echo off
cd /d "C:\Users\priti\OneDrive\Desktop\Tater world website"
if exist ".git\index.lock" del /f ".git\index.lock"
"C:\Program Files\Git\cmd\git.exe" add .
"C:\Program Files\Git\cmd\git.exe" commit -m "Update website files"
"C:\Program Files\Git\cmd\git.exe" push origin main
echo DONE
