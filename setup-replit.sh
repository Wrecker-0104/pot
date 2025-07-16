#!/bin/bash

# Replit Setup Script for Dark Portfolio
echo "🚀 Setting up Dark Portfolio for Replit..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if DATABASE_URL is set for production
if [ "$NODE_ENV" = "production" ] && [ -z "$DATABASE_URL" ]; then
    echo "⚠️  Warning: DATABASE_URL not set. Using in-memory storage."
    echo "   Set DATABASE_URL in Replit Secrets for persistent data storage."
else
    echo "✅ Database configuration ready"
fi

# Run database migrations if DATABASE_URL is available
if [ -n "$DATABASE_URL" ]; then
    echo "🗄️  Setting up database schema..."
    npm run db:push
    echo "✅ Database schema updated"
fi

echo "✨ Setup complete!"
echo ""
echo "🌐 Your portfolio is ready to run!"
echo "   Click the 'Run' button or use 'npm run dev'"
echo ""
echo "📝 To customize your portfolio:"
echo "   - Edit components in client/src/components/"
echo "   - Update your resume in attached_assets/"
echo "   - Modify styling in client/src/index.css"
