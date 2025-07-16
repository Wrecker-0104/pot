# Troubleshooting Guide for Replit Deployment

## Common Issues and Solutions

### 1. "DATABASE_URL is required" Error
**Solution**: 
- Go to Replit Secrets (🔒 icon)
- Add `DATABASE_URL` with your PostgreSQL connection string
- Or set `NODE_ENV=development` to use in-memory storage

### 2. Dependencies Not Installing
**Solution**:
```bash
# In Replit Shell
rm -rf node_modules
rm package-lock.json
npm install
```

### 3. Build Errors
**Solution**:
```bash
# Clear build cache
rm -rf dist
npm run build
```

### 4. Port/Connection Issues
**Issue**: App not accessible
**Solution**: 
- Ensure port 5000 is configured (already set in your project)
- Check that `.replit` file has correct port mapping

### 5. Database Schema Issues
**Solution**:
```bash
# Reset and recreate database schema
npm run db:push
```

### 6. Environment Variables Not Working
**Solution**:
- Use Replit Secrets tab (not .env files)
- Restart your Repl after adding secrets
- Check variable names match exactly

### 7. Static Files Not Loading
**Issue**: CSS/JS files not loading
**Solution**: 
- Run `npm run build` for production
- Check that `dist/public` directory is created

## Quick Commands

```bash
# Full reset (if nothing works)
rm -rf node_modules dist
npm install
npm run build
npm run start

# Development mode
npm run dev

# Check logs
npm run dev 2>&1 | tee debug.log
```

## Database Setup Steps

1. **Enable PostgreSQL in Replit**:
   - Go to Database tab in sidebar
   - Enable PostgreSQL
   - Copy the connection string

2. **Set Environment Variable**:
   - Go to Secrets tab
   - Add `DATABASE_URL` with the connection string

3. **Run Schema Migration**:
   ```bash
   npm run db:push
   ```

## Getting Help

If you're still having issues:
1. Check the Console tab for error messages
2. Look at the Shell output for detailed logs
3. Verify all dependencies are installed: `npm list`
4. Make sure you're using Node.js 20 (configured in `.replit`)

## Production Checklist

- [ ] DATABASE_URL is set in Secrets
- [ ] All dependencies installed (`npm install`)
- [ ] Database schema updated (`npm run db:push`)
- [ ] Build completed successfully (`npm run build`)
- [ ] App runs without errors (`npm run start`)

Your portfolio should be ready to go! 🎉
