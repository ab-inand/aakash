# Story Bot - Interactive Story Generation App

## Overview
Story Bot is an innovative web application that generates interactive stories using AI technology. The app allows users to create, customize, and explore unique stories based on their preferences and inputs.

## Features
- 🤖 AI-powered story generation
- 📝 Interactive story customization
- 🎨 Beautiful and responsive user interface
- 🌈 Dynamic theme customization
- 📱 Mobile-friendly design
- 🔄 Real-time story updates
- 💾 Story saving functionality

## Detailed Technical Stack

### Core Technologies
- **React (v18+)**: Modern UI library for building interactive user interfaces
  - Functional components with hooks
  - Custom hooks for reusable logic
  - React Context for state management
  - React Suspense for loading states

- **TypeScript (v5+)**: Adds static typing to JavaScript
  - Strict type checking enabled
  - Custom type definitions
  - Interface-driven development
  - Enhanced IDE support

- **Vite**: Next-generation frontend build tool
  - Lightning-fast HMR (Hot Module Replacement)
  - Optimized build process
  - ESBuild for transpilation
  - Development server with instant startup

### Styling and UI
- **Tailwind CSS**: Utility-first CSS framework
  - Custom theme configuration
  - Responsive design utilities
  - Dark mode support
  - JIT (Just-In-Time) compilation

- **Shadcn UI**: High-quality React components
  - Accessible components (ARIA compliant)
  - Customizable themes
  - Radix UI primitives
  - Component variants

### Form Management and Validation
- **React Hook Form**: Performant form management
  - Uncontrolled form inputs
  - Form validation
  - Error handling
  - Field arrays support

- **Zod**: TypeScript-first schema validation
  - Runtime type checking
  - Complex schema validation
  - Error messages
  - Type inference

### State Management
- **React Context API**: Application state management
  - Theme context
  - User preferences
  - Story data management
  - Authentication state

### HTTP and API Integration
- **Axios**: Promise-based HTTP client
  - Request/response interceptors
  - Automatic transforms
  - Error handling
  - Request cancellation

### UI Enhancement
- **Lucide React**: Modern icon library
  - SVG-based icons
  - Tree-shakeable
  - Customizable
  - 500+ icons

### Development Tools
- **ESLint**: Code quality tool
  - Custom rule configuration
  - TypeScript support
  - React-specific rules
  - Automatic fixing

- **Prettier**: Code formatter
  - Consistent code style
  - Integration with ESLint
  - Pre-commit hooks

### AI Integration
- **OpenAI API**: AI story generation
  - GPT model integration
  - Prompt engineering
  - Stream responses
  - Error handling

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd story-bot
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
VITE_OPENAI_API_KEY=your_api_key_here
```

## Directory Navigation

### Project Root
```bash
# Navigate to project root
cd story-bot

# List all files and directories
ls -la
```

### Important Directories
```bash
# Source code directory
cd src

# Components directory
cd src/components

# Application routes
cd src/app

# Utility functions
cd src/lib

# Custom hooks
cd src/hooks

# Context providers
cd src/context

# TypeScript types
cd src/types

# Static assets
cd public
```

### Common Navigation Commands
```bash
# Go back one directory
cd ..

# Go back to project root from any subdirectory
cd $(git rev-parse --show-toplevel)
# or
cd /Users/abhinand/Vs\ code\ /Ai\ project/aakash\ 3/story-bot

# List directory contents with details
ls -l

# Show current directory path
pwd
```

### Directory Structure Overview
```
story-bot/
├── src/                  # Source code directory
│   ├── components/       # UI components
│   │   ├── ui/          # Base UI components
│   │   └── stories/     # Story-related components
│   ├── lib/             # Utility functions
│   │   ├── utils/       # Helper functions
│   │   └── api/         # API related code
│   ├── app/             # Application routes
│   ├── hooks/           # Custom React hooks
│   ├── context/         # React Context providers
│   └── types/           # TypeScript definitions
├── public/              # Static assets
└── ...config files
```

## Server Setup and Configuration

### Development Server
1. Start the development server with hot reload:
```bash
npm run dev
# or
yarn dev
```
- The app will be available at `http://localhost:5173`
- Hot Module Replacement (HMR) is enabled by default
- Changes will automatically refresh in the browser

### Production Build and Preview
1. Create a production build:
```bash
npm run build
# or
yarn build
```

2. Preview the production build locally:
```bash
npm run preview
# or
yarn preview
```
- The production preview will be available at `http://localhost:4173`

### Environment Configurations
You can customize the server configuration by:

1. Modifying the port number:
```bash
# Start dev server on a different port
npm run dev -- --port 3000

# Preview production on a different port
npm run preview -- --port 3000
```

2. Specify host for network access:
```bash
# Allow network access
npm run dev -- --host

# Specify custom host
npm run dev -- --host 0.0.0.0
```

3. Using HTTPS in development:
```bash
# Enable HTTPS
npm run dev -- --https
```

### Common Issues and Solutions
1. If port 5173 is already in use:
   - The server will automatically try the next available port
   - Or manually specify a different port as shown above

2. For network connection issues:
   - Ensure firewall settings allow the port
   - Use `--host` flag to enable network access
   - Check if the port is not blocked by other applications

3. For build errors:
   - Clear the `dist` directory: `rm -rf dist`
   - Delete `node_modules`: `rm -rf node_modules`
   - Reinstall dependencies: `npm install`

## Project Structure
```
story-bot/
├── src/
│   ├── components/     # Reusable UI components
│   ├── lib/           # Utility functions and configurations
│   ├── app/           # Application routes and layouts
│   ├── hooks/         # Custom React hooks
│   ├── context/       # React Context providers
│   └── types/         # TypeScript type definitions
├── public/            # Static assets
└── ...config files
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
