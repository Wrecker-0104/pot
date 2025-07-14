# replit.md

## Overview

This is a full-stack portfolio website built with a modern tech stack featuring React frontend, Express backend, and PostgreSQL database. The application showcases a personal portfolio with sections for about, skills, projects, education, accomplishments, and contact functionality with form submission and data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: GSAP with ScrollTrigger for smooth animations and transitions
- **Styling**: Custom CSS variables with dark theme, Inter font family

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API with JSON responses
- **Middleware**: Express built-in middleware for JSON parsing and URL encoding
- **Error Handling**: Centralized error handling with custom error middleware
- **Request Logging**: Custom logging middleware for API requests with timing

### Database Architecture
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM with TypeScript support
- **Connection**: Neon Database serverless PostgreSQL
- **Schema Management**: Drizzle migrations with schema-first approach
- **Development Storage**: In-memory storage implementation for development

## Key Components

### Frontend Components
- **Layout Components**: Navigation, Hero, Footer with responsive design
- **Interactive Elements**: Custom cursor, particle background, loading screen
- **Content Sections**: About, Skills, Projects, Education, Accomplishments, Contact
- **UI Components**: Complete shadcn/ui component library integration
- **Form Components**: Contact form with validation and submission handling

### Backend Components
- **Route Handlers**: Contact message submission and retrieval endpoints
- **Storage Layer**: Abstracted storage interface with memory and database implementations
- **Schema Validation**: Zod schemas for request/response validation
- **Development Server**: Vite integration for development with HMR support

### Shared Components
- **Schema Definitions**: Shared TypeScript types and Zod schemas
- **Database Models**: Drizzle ORM table definitions for contact messages

## Data Flow

### Contact Form Submission
1. User fills contact form with name, email, subject, and message
2. Frontend validates data using Zod schema
3. Form data submitted to `/api/contact` POST endpoint
4. Backend validates request body against shared schema
5. Data persisted to storage layer (memory for dev, PostgreSQL for prod)
6. Success/error response returned to frontend
7. User feedback displayed via toast notifications

### Contact Messages Retrieval
1. Admin requests `/api/contact` GET endpoint
2. Storage layer retrieves all messages sorted by creation date
3. Messages returned as JSON response
4. Frontend can display messages list (admin functionality)

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Libraries**: Radix UI primitives, Tailwind CSS, shadcn/ui
- **Animation**: GSAP with ScrollTrigger plugin
- **State Management**: TanStack React Query
- **Validation**: Zod with Hookform resolvers
- **Date Handling**: date-fns for date formatting
- **Icons**: Lucide React icons

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Development**: tsx for TypeScript execution, Vite for frontend integration
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Build Tools**: esbuild for backend bundling

### Development Dependencies
- **Build Tools**: Vite, PostCSS, Autoprefixer
- **TypeScript**: Full TypeScript support with strict configuration
- **Development**: Replit-specific plugins for development environment

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR at `client/` directory
- **Backend**: tsx execution of TypeScript files with auto-restart
- **Database**: In-memory storage for development simplicity
- **Integration**: Vite middleware integration for SSR-like development

### Production Build
- **Frontend**: Vite build outputs to `dist/public/`
- **Backend**: esbuild bundles TypeScript to `dist/index.js`
- **Database**: PostgreSQL via Neon Database with connection pooling
- **Deployment**: Single artifact deployment with static file serving

### Build Scripts
- `npm run dev`: Development server with TypeScript execution
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server execution
- `npm run db:push`: Database schema migration via Drizzle

### Environment Configuration
- **Database**: `DATABASE_URL` environment variable for PostgreSQL connection
- **Development**: NODE_ENV determines development vs production behavior
- **Replit**: Special handling for Replit environment with cartographer plugin

The application follows modern full-stack patterns with clear separation of concerns, type safety throughout, and scalable architecture suitable for portfolio showcase and potential expansion.