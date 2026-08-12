$ErrorActionPreference = "Stop"
$websiteFolder = "C:\Users\priti\OneDrive\Desktop\Tater world website"

Set-Location $websiteFolder
Write-Host "Current directory: $(Get-Location)"
Write-Host ""

# Check git status
Write-Host "=== Git Status ==="
git status
Write-Host ""

# Add the modified file
Write-Host "=== Adding index.html ==="
git add index.html
Write-Host "Added index.html"
Write-Host ""

# Commit changes
Write-Host "=== Committing changes ==="
git commit -m "Update CSR cards: make Recognition card light-colored and replace emoji placeholders with SVG icons"
Write-Host ""

# Show the commit
Write-Host "=== Latest commit ==="
git log -1 --oneline
Write-Host ""

Write-Host "Done!"
