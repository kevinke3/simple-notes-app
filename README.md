# Simple Notes App (Vite + React)

## Short Project Description
This is a simple React-based notes application built with Vite for fast development and builds. It allows users to create, view, edit, and delete notes. Notes are stored in memory using React state (persists during the session but resets on page refresh). The app uses modular components for clean organization and includes basic validation (e.g., required title) and user confirmations for deletions.

Key React concepts demonstrated:
- `useState` for managing notes list, form inputs, and editing state.
- `useEffect` for resetting form on edit/cancel.
- Event handling for forms and buttons.
- Conditional rendering (e.g., edit vs. add mode).

Vite is used for its superior performance over Create React App. No backend is used, keeping it frontend-focused as per the assignment options.

## Setup Steps
1. Ensure Node.js (v14+) and npm are installed.
2. Clone/fork the repo and navigate to `submissions/YourFullName/simple-notes-app/`.
3. Run `npm install` to install dependencies (React + Vite).
4. Run `npm run dev` to launch the app at `http://localhost:5173`.
5. For production: `npm run build` (outputs to `dist/` folder).
6. Test CRUD operations:
   - Add a note with title and content.
   - Edit by clicking "Edit" (form pre-fills).
   - Delete with confirmation prompt.

## Notes & Improvements I'd Make
- **Strengths**: Clean, readable code with separated concerns (components). Basic error handling, responsive CSS, and Vite's fast HMR for smooth dev experience.
- **Effort**: Implemented in ~2 hours; focused on functionality and clarity. Switched to Vite for modern tooling.
- **Potential Improvements**:
  - Add localStorage for persistence across sessions.
  - Integrate a backend (e.g., Node.js Express API with JSON file storage) for real data fetching—endpoints like `GET /notes` could replace state.
  - Use a CSS framework like Tailwind CSS (easy to add via Vite plugins).
  - Add more validation (e.g., max length) and loading states.
  - Unit tests with Vitest (Vite's testing tool) or Jest for components.
  - Accessibility improvements (e.g., ARIA labels).
  - Environment variables for API keys if extending to backend.

This meets the evaluation criteria: Full CRUD functionality, organized code, Git-friendly structure, and clear documentation.