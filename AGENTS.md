# Agent Guidelines for ServiceNow Capability Planner

## Build/Dev Commands
- `npm start` - Start dev server with live reload (port 8080)
- `npm run build` - Build static site to `_site/` directory
- `npm run getEntitlements <start> <end>` - Download entitlements (e.g., 0 30000)
- No test suite currently configured

## Code Style

### File Organization
- Category modules: `data/categories/*.js` (CommonJS format, module.exports)
- Frontend modules: `src/js/modules/*.js` (ES6 modules, import/export)
- Utils: `src/js/utils/*.js` (ES6 modules)
- Scripts: `scripts/*.js` (ES6 modules, node-fetch)

### Imports & Modules
- Frontend: Use ES6 imports (`import { storage } from './utils/storage.js'`)
- Category files: Use CommonJS (`module.exports = { name, products }`)
- Always include `.js` extensions in relative imports

### Naming Conventions
- Functions: camelCase (e.g., `loadStates`, `cycleState`, `parseInstanceUrl`)
- Files: kebab-case for modules, camelCase for category names
- Constants: Use const for module-level state arrays/objects
- Data attributes: kebab-case (`data-product`, `data-state`)

### Code Patterns
- Prefer querySelector/querySelectorAll over older DOM methods
- Use arrow functions for callbacks and event handlers
- Store/retrieve data via storage module wrapper for localStorage
- Event listeners: Attach handlers after DOM ready, use stopPropagation for nested clicks
- State management: Always save to localStorage after state changes

### Error Handling
- Use try-catch for JSON.parse operations on user input
- Gracefully handle missing data attributes with fallbacks
- Console.warn for non-critical errors (e.g., invalid table data)

## ServiceNow Integration
- Support both query formats: array `[{"table": "query"}]` and object `{"table": "query"}`
- Always append `^ORDERBYDESCsys_created_on` to queries when generating instance links
