# Your Platform

A full-stack (Node.js/Express + Vite/React) starter for Railway.

## Development

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Production Build

- Build the frontend:  
  `cd frontend && npm install && npm run build`
- Start the backend (which serves the static frontend):  
  `cd backend && npm install && npm start`

## Deploy to Railway

- Point Railway to your repo root.
- Set up the service with the working directory as `backend` (important!).
- Railway will run `npm install` and `npm start` in `/backend`.
- The backend will automatically build and serve the frontend using the `postinstall` script.

---
