@echo off
cd /d "C:\Users\priti\OneDrive\Desktop\Tater world website"
echo Current directory: %cd%
echo.

echo === Git Status ===
git status
echo.

echo === Git Add ===
git add index.html
echo.

echo === Git Commit ===
git commit -m "Update CSR cards: make Recognition card light-colored and replace emoji placeholders with SVG icons"
echo.

echo === Git Log ===
git log -1 --oneline
echo.

echo Done!
pause
