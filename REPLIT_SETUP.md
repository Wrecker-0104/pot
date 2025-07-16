# Dark Portfolio - Replit Deployment Guide

## 🚀 Quick Setup for Replit

This project is ready to deploy on Replit! Follow these steps:

### 1. Import to Replit
1. Go to [Replit](https://replit.com)
2. Click "Create Repl"
3. Choose "Import from GitHub" or upload your project files
4. Select the folder containing your project

### 2. Database Setup (Important!)
Your project uses PostgreSQL. In Replit:

1. **Enable PostgreSQL**: 
   - Go to your Repl settings
   - In the sidebar, click on "Database" 
   - Enable PostgreSQL (it's already configured in your `.replit` file)

2. **Set Environment Variables**:
   - Go to "Secrets" tab (🔒 icon in sidebar)
   - Add a new secret:
     - Key: `DATABASE_URL`
     - Value: Your PostgreSQL connection string (Replit will provide this)
   
   Or for production use your own database:
   ```
   DATABASE_URL=postgresql://username:password@hostname:port/database
   ```

### 3. Run Your Project
1. Click the "Run" button in Replit
2. Your portfolio will be available at the provided URL
3. The development server runs on port 5000 (already configured)

### 4. Database Schema Setup
After the first run, set up your database schema:
1. Open the Shell tab in Replit
2. Run: `npm run db:push`

This will create the necessary database tables.

### 5. Production Deployment
For production deployment on Replit:
1. Go to the "Deploy" tab
2. Click "Deploy"
3. Your app will be built and deployed automatically

## 🛠 Project Features

- **React Frontend** with TypeScript
- **Express Backend** with API routes
- **PostgreSQL Database** with Drizzle ORM
- **Contact Form** with data persistence
- **Modern UI** with Tailwind CSS & shadcn/ui
- **Smooth Animations** with GSAP
- **Responsive Design** for all devices

## 📝 Customization

To customize your portfolio:
1. Edit content in `client/src/components/` files
2. Update your information in the respective component files
3. Replace the resume in `attached_assets/` folder
4. Modify styling in `client/src/index.css`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Update database schema

## 📞 Contact Form

The contact form automatically saves submissions to your PostgreSQL database. Access the data through your database interface or add admin routes as needed.

---

**Your portfolio is ready to go live on Replit! 🎉**
