# Push to GitHub Process

## Quick Reference
When pushing code to GitHub:

1. **Delete stale git lock file (if exists)**
   - Windows path: `C:\Users\priti\OneDrive\Desktop\Tater world website\.git\index.lock`
   - Use PowerShell: `Remove-Item -Force "path\to\.git\index.lock"`

2. **Update remote URL with fresh token** (if auth fails)
   - Use batch script or git command:
   ```
   git remote set-url origin "https://USERNAME:TOKEN@github.com/OWNER/REPO.git"
   ```

3. **Create & Run Batch Script**
   - Create `.bat` file on Windows (e.g., `C:\Users\priti\push_git.bat`)
   - Script template:
   ```batch
   @echo off
   cd /d "C:\Users\priti\OneDrive\Desktop\Tater world website"
   "C:\Program Files\Git\cmd\git.exe" add .
   "C:\Program Files\Git\cmd\git.exe" commit -m "Your message"
   "C:\Program Files\Git\cmd\git.exe" push origin main
   echo DONE
   ```
   - Run via Desktop Commander using cmd shell

4. **Success Indicators**
   - Look for output like: `main -> main` and `EXIT CODE: 0`
   - Confirms push completed

## GitHub Credentials
- **Repo**: https://github.com/Yashkumar23092003/Tater-world-Website.git
- **Username**: Yashkumar23092003
- **Token**: Ask user for fresh PAT when needed (tokens expire)

## Key Tools
- Desktop Commander (Windows shell access)
- Batch scripts work better than PowerShell for git output capture
- Always use absolute paths (C:\ format) for Windows commands
