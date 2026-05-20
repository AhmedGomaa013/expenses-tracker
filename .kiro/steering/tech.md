# Technology Stack

## Frontend

- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.10
- **Language**: JavaScript (ES2020+, ESM modules)
- **Styling**: Inline styles (no CSS framework)

## Backend

- **Runtime**: Node.js
- **Framework**: Express 5.2.1
- **Storage**: JSON file-based persistence (expenses.json)
- **ID Generation**: UUID v4

## Development Tools

- **Linting**: ESLint 9.13.0 with React plugins
- **Package Manager**: npm

## Common Commands

### Development
```bash
npm run dev          # Start Vite dev server (frontend)
node server.js       # Start Express API server (backend, port 3001)
```

### Build & Deploy
```bash
npm run build        # Build production bundle
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run lint         # Run ESLint on codebase
```

## API Configuration

- Backend runs on `http://localhost:3001`
- API endpoints prefixed with `/api/expenses`
- CORS enabled for local development

## Key Dependencies

- `cors`: Cross-origin resource sharing
- `express`: REST API server
- `uuid`: Unique ID generation
- `react` + `react-dom`: UI framework
- `@vitejs/plugin-react`: Vite React integration with Babel Fast Refresh
