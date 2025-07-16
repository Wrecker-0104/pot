# 🌟 Dark Portfolio

A modern, responsive portfolio website built with React, TypeScript, Express, and PostgreSQL. Features smooth animations, dark theme, and a working contact form.

## ✨ Features

- **Modern Tech Stack**: React 18, TypeScript, Express.js, PostgreSQL
- **Beautiful UI**: Tailwind CSS with shadcn/ui components
- **Smooth Animations**: GSAP with ScrollTrigger
- **Responsive Design**: Works on all devices
- **Contact Form**: Persistent data storage
- **Dark Theme**: Professional dark design
- **Type Safe**: Full TypeScript support

## 🚀 Quick Deploy on Replit

This project is optimized for Replit deployment:

1. **Import to Replit**:
   - Go to [Replit.com](https://replit.com)
   - Create new Repl → Import from GitHub
   - Upload your project files

2. **Setup Database** (Required for contact form):
   - Enable PostgreSQL in Replit Database tab
   - Add `DATABASE_URL` to Secrets tab
   - Run `npm run db:push` in Shell

3. **Run**: Click the Run button or use `npm run dev`

📖 **Detailed Setup**: See [REPLIT_SETUP.md](./REPLIT_SETUP.md)
🔧 **Troubleshooting**: See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database URL

# Run database migrations
npm run db:push

# Start development server
npm run dev
```

## 📁 Project Structure

```
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom hooks
│   │   └── lib/          # Utilities
├── server/               # Express backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Database layer
├── shared/               # Shared types & schemas
└── attached_assets/      # Static assets (resume, etc.)
```

## 🎨 Customization

### Update Personal Information
- Edit components in `client/src/components/`
- Replace resume in `attached_assets/`
- Update contact information in `Contact.tsx`

### Styling
- Main styles: `client/src/index.css`
- Component styles: Tailwind classes in components
- Theme: CSS variables in `index.css`

### Content Sections
- **Hero**: `client/src/components/Hero.tsx`
- **About**: `client/src/components/About.tsx`
- **Skills**: `client/src/components/Skills.tsx`
- **Projects**: `client/src/components/Projects.tsx`
- **Education**: `client/src/components/Education.tsx`
- **Contact**: `client/src/components/Contact.tsx`

## 📜 Available Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run db:push` - Update database schema
- `npm run setup` - Replit setup script

## 🗄️ Database

Uses PostgreSQL with Drizzle ORM:
- **Development**: In-memory storage (no database needed)
- **Production**: PostgreSQL database required
- **Schema**: Contact messages table

## 📱 Responsive Design

- **Mobile**: Optimized for phones and tablets
- **Desktop**: Full-featured desktop experience
- **Animations**: Smooth GSAP animations
- **Performance**: Optimized loading and rendering

## 🔒 Environment Variables

```bash
# Production database (required for contact form persistence)
DATABASE_URL=postgresql://username:password@hostname:port/database

# Environment
NODE_ENV=production
```

## 🚀 Deployment

### Replit (Recommended)
1. Import project to Replit
2. Enable PostgreSQL database
3. Set `DATABASE_URL` in Secrets
4. Click Run

### Other Platforms
1. Set environment variables
2. Run `npm run build`
3. Start with `npm run start`
4. Ensure PostgreSQL database is available

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for your own portfolio!

---

**Ready to showcase your work? Deploy on Replit and share your portfolio with the world! 🌟**
