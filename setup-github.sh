#!/bin/bash

# GitHub Setup Script for Dark Portfolio
echo "🚀 Setting up your Dark Portfolio for GitHub hosting..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Build static version
echo "🏗️  Building static version for GitHub Pages..."
npm run build:static

if [ $? -eq 0 ]; then
    echo "✅ Static build successful!"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi

# Add all files
echo "📂 Adding files to git..."
git add .

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "ℹ️  No changes to commit"
else
    echo "💾 Committing changes..."
    git commit -m "Setup for GitHub Pages hosting

- Added GitHub Actions workflow for auto-deployment
- Created static build configuration
- Enhanced gitignore for better version control
- Ready for GitHub Pages deployment"
    echo "✅ Changes committed!"
fi

echo ""
echo "🎉 Your portfolio is ready for GitHub!"
echo ""
echo "📋 Next steps:"
echo "1. Create a repository on GitHub.com"
echo "2. Add remote: git remote add origin https://github.com/USERNAME/REPO.git"
echo "3. Push: git push -u origin main"
echo "4. Enable GitHub Pages in repository settings"
echo ""
echo "🌐 Your site will be live at: https://USERNAME.github.io/REPO/"
echo ""
echo "📖 For detailed instructions, see: GITHUB_HOSTING.md"
