# Project Structure

## Root Directory

```
expenses-tracker/
├── src/                    # Frontend source code
├── public/                 # Static assets
├── dist/                   # Production build output (generated)
├── node_modules/           # Dependencies (generated)
├── server.js               # Express API server
├── expenses.json           # Data storage (generated at runtime)
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite build configuration
├── eslint.config.js        # ESLint configuration
└── index.html              # HTML entry point
```

## Frontend Structure (`/src`)

```
src/
├── App.jsx                 # Main application component
├── main.jsx                # React entry point
├── App.css                 # Application styles
├── index.css               # Global styles
└── assets/                 # Static assets (images, icons)
```

## Architecture Patterns

### Frontend
- **Single Component Architecture**: All logic in `App.jsx` (no component decomposition yet)
- **State Management**: React hooks (`useState`, `useEffect`)
- **API Communication**: Native `fetch` API
- **Styling**: Inline styles directly in JSX

### Backend
- **RESTful API**: Express routes for CRUD operations
- **File-based Storage**: Synchronous JSON file read/write
- **Middleware**: CORS and JSON body parsing

## Code Organization Conventions

### Component Structure
- Functional components with hooks
- State declarations at component top
- Helper functions before return statement
- JSX returned at component bottom

### API Endpoints
- `GET /api/expenses` - Retrieve all expenses
- `POST /api/expenses` - Create new expense
- `DELETE /api/expenses/:id` - Delete expense by ID

### Data Model
```javascript
{
  id: string,           // UUID v4
  description: string,  // Expense description
  amount: number,       // Expense amount
  category: string,     // Optional category (default: "General")
  date: string         // ISO 8601 timestamp
}
```

## File Naming
- React components: PascalCase with `.jsx` extension
- Configuration files: kebab-case with `.js` extension
- CSS files: kebab-case with `.css` extension

## Import Conventions
- ES modules (`import`/`export`) for frontend
- CommonJS (`require`/`module.exports`) for backend server
