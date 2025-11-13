# Tianna's Luxury Antiques

## Overview

Tianna's Luxury Antiques is a B2B luxury antiques platform specializing in 18th and 19th-century French and European decorative arts. The application serves as an exclusive online showcase for museums, corporate collections, and multinational projects, featuring curated antique pieces with detailed provenance and institutional-grade presentation.

The application is built as a full-stack web platform with a React frontend and Express backend, designed to deliver a sophisticated, museum-quality browsing experience with inquiry capabilities for institutional clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**UI Component System**: shadcn/ui component library built on Radix UI primitives, providing accessible, customizable components with Tailwind CSS styling. The design system follows a luxury aesthetic with custom theming (gold accents, deep burgundy, ivory backgrounds) defined in CSS custom properties.

**Routing**: Wouter for lightweight client-side routing. Currently implements a single-page application with home page and 404 fallback.

**State Management**: TanStack Query (React Query) for server state management, handling data fetching, caching, and synchronization with the backend API.

**Form Handling**: React Hook Form with Zod schema validation for type-safe form submissions and client-side validation.

**Styling Approach**: Tailwind CSS with custom configuration, Google Fonts integration (Playfair Display serif for headings, Montserrat sans-serif for body text), and a comprehensive design system including custom color palettes, shadows, and elevation utilities.

**Component Structure**:
- Page components in `client/src/pages/` (home, not-found)
- Feature components in `client/src/components/` (hero, gallery, contact, navigation, etc.)
- Reusable UI primitives in `client/src/components/ui/`
- Shared business logic in `client/src/lib/` and `client/src/hooks/`

### Backend Architecture

**Framework**: Express.js server with TypeScript, running in ESM mode.

**API Design**: RESTful API with JSON responses. Primary endpoints:
- `GET /api/antiques` - Retrieve antiques collection
- `POST /api/inquiries` - Submit institutional inquiry
- `GET /api/inquiries` - Retrieve inquiries (admin/internal)

**Data Layer**: Storage abstraction pattern using an `IStorage` interface. Currently implements in-memory storage (`MemStorage` class) with seed data for antiques. Architecture supports future database integration without changing API contracts.

**Schema Validation**: Zod schemas shared between client and server (`shared/schema.ts`) for type-safe data validation and TypeScript inference.

**Middleware Stack**:
- JSON body parsing with raw body preservation for potential webhook integrations
- URL-encoded form data support
- Request logging with duration tracking for API routes
- Development-specific Vite middleware for HMR and SSR

**Development vs. Production**: Vite dev server integration in development mode; static file serving with pre-built assets in production.

### Data Models

**Antiques Schema**:
- Unique identifier (UUID)
- Name, description, period, origin, category
- Image URL for visual presentation
- No pricing information (B2B model with private negotiations)

**Inquiries Schema**:
- Unique identifier (UUID)
- Contact information (name, email, phone optional)
- Institution name
- Message/inquiry details
- Timestamp for tracking

**Type Safety**: Drizzle ORM schema definitions with Drizzle-Zod integration for automatic TypeScript type inference and runtime validation.

### External Dependencies

**Database**: PostgreSQL via Neon serverless driver (`@neondatabase/serverless`). Drizzle ORM configured for schema management and migrations. Database URL must be provided via `DATABASE_URL` environment variable.

**UI Component Libraries**:
- Radix UI primitives (@radix-ui/*) for accessible, unstyled components
- Embla Carousel for image galleries
- Lucide React for icon system
- cmdk for command palette functionality
- date-fns for date formatting

**Build Tools**:
- Vite for frontend bundling and development
- esbuild for backend bundling in production
- tsx for TypeScript execution in development
- PostCSS with Tailwind CSS and Autoprefixer

**Development Tools** (Replit-specific):
- @replit/vite-plugin-runtime-error-modal for error overlay
- @replit/vite-plugin-cartographer for code mapping
- @replit/vite-plugin-dev-banner for development banner

**Asset Management**: Static assets stored in `attached_assets/` directory, including antique images and CEO profile photo. Vite configured with alias `@assets` for clean imports.

**Fonts**: Google Fonts CDN integration for Playfair Display (serif) and Montserrat (sans-serif) font families.

**Theme System**: Light/dark mode support via context provider with localStorage persistence, though application defaults to light theme for luxury brand consistency.