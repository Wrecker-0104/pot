@echo off
echo 🚀 Setting up your Dark Portfolio for GitHub hosting...

REM Check if git is initialized
if not exist ".git" (
    echo 📝 Initializing git repository...
    git init
    echo ✅ Git repository initialized
) else (
    echo ✅ Git repository already exists
)

REM Build static version
echo 🏗️  Building static version for GitHub Pages...
call npm run build:static

if %errorlevel% neq 0 (
    echo ❌ Build failed. Please check the error messages above.
    pause
    exit /b 1
)

echo ✅ Static build successful!

REM Add all files
echo 📂 Adding files to git...
git add .

REM Commit changes
echo 💾 Committing changes...
git commit -m "Setup for GitHub Pages hosting - Added GitHub Actions workflow for auto-deployment - Created static build configuration - Enhanced gitignore for better version control - Ready for GitHub Pages deployment"

if %errorlevel% neq 0 (
    echo ℹ️  No changes to commit or commit failed
) else (
    echo ✅ Changes committed!
)

echo.
echo 🎉 Your portfolio is ready for GitHub!
echo.
echo 📋 Next steps:
echo 1. Create a repository on GitHub.com
echo 2. Add remote: git remote add origin https://github.com/USERNAME/REPO.git
echo 3. Push: git push -u origin main
echo 4. Enable GitHub Pages in repository settings
echo.
echo 🌐 Your site will be live at: https://USERNAME.github.io/REPO/
echo.
echo 📖 For detailed instructions, see: GITHUB_HOSTING.md
pause
