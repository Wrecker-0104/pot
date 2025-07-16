# 🚀 GitHub Hosting Guide for Dark Portfolio

## 📋 Overview

This guide will help you deploy your Dark Portfolio on GitHub using **GitHub Pages**. Since GitHub Pages only supports static sites, we've configured your project to work without the backend.

## ⚡ Quick Setup (3 Methods)

### Method 1: Automatic GitHub Actions (Recommended)

1. **Create GitHub Repository**:
   ```bash
   # Initialize git (if not already done)
   git init
   git add .
   git commit -m "Initial commit: Dark Portfolio"
   
   # Create repository on GitHub.com
   # Then add remote and push
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Source: **GitHub Actions**
   - The workflow will automatically deploy on push to main

3. **Your site will be live at**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Method 2: Manual GitHub Pages Deployment

1. **Build your static site**:
   ```bash
   npm run build:static
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages**:
   - Repository Settings → Pages
   - Source: **Deploy from branch**
   - Branch: **gh-pages**

### Method 3: Manual Upload

1. Build the static version:
   ```bash
   npm run build:static
   ```

2. Upload the `dist/public` folder contents to your GitHub repository

## 🛠 What's Configured for GitHub Pages

### ✅ Static Build Configuration
- **Vite config**: `vite.config.static.ts` for static-only builds
- **Base path**: Configured for GitHub Pages subdirectory
- **Asset handling**: All assets properly referenced

### ✅ GitHub Actions Workflow
- **Auto-deploy**: Triggers on push to main branch
- **Node.js 20**: Latest stable version
- **Build & Deploy**: Automatic build and deployment

### ✅ Contact Form
- **Formspree integration**: Already configured to work without backend
- **Form endpoint**: `https://formspree.io/f/mgvzekvd`
- **Client-side validation**: Full form validation

### ✅ Features That Work on GitHub Pages
- ✅ All animations and interactions
- ✅ Responsive design
- ✅ Contact form (via Formspree)
- ✅ Resume download
- ✅ All styling and themes
- ✅ Particle effects and GSAP animations

## 📝 Available Scripts for GitHub Pages

```bash
# Build static version for GitHub Pages
npm run build:static

# Preview static build locally
npm run preview

# Deploy manually to GitHub Pages
npm run deploy

# Development (full-stack version)
npm run dev
```

## 🎨 Customization for GitHub Pages

### Update Formspree Endpoint (Important!)
The contact form uses a demo Formspree endpoint. To receive your own messages:

1. Go to [Formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Update the endpoint in `client/src/components/Contact.tsx`:
   ```tsx
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

### Custom Domain (Optional)
1. Add your domain to the GitHub Pages settings
2. Update the `cname` field in `.github/workflows/deploy.yml`

## 🔧 Environment Configuration

For GitHub Pages, create `.env.local` (not committed):
```bash
# For development only
VITE_API_URL=http://localhost:5000/api
VITE_FORMSPREE_URL=https://formspree.io/f/YOUR_FORM_ID
```

## 📱 What's Different from Full-Stack Version

| Feature | GitHub Pages | Full-Stack (Replit) |
|---------|-------------|---------------------|
| Contact Form | ✅ Formspree | ✅ Database |
| Admin Panel | ❌ Static only | ✅ Backend API |
| Message Storage | ❌ External service | ✅ PostgreSQL |
| Real-time Updates | ❌ Static | ✅ Live updates |
| Hosting Cost | 🆓 Free | 💰 Paid (for database) |

## 🚀 Deployment Steps Summary

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages** in repository settings

3. **Wait for deployment** (check Actions tab)

4. **Visit your live site**! 🎉

## 📞 Support

- **GitHub Pages Docs**: [docs.github.com/pages](https://docs.github.com/pages)
- **Formspree Docs**: [help.formspree.io](https://help.formspree.io)
- **Troubleshooting**: Check the GitHub Actions tab for build logs

---

**Your portfolio will be live on GitHub Pages! 🌟**

The static version includes all visual features, animations, and a working contact form. Perfect for showcasing your work to potential employers and clients!
