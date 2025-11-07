# Legal Document Search System

A full-stack application for searching and summarizing legal documents. The project uses a FastAPI backend and a Vite + React frontend. Both services are containerized and can be run with Docker or docker-compose for easy local development.

## Quick facts

-   Backend: FastAPI (uvicorn) — listens on port 8000 inside the container
-   Frontend: Vite + React — dev server on port 5173 inside the container
-   Frontend reads the backend base URL from Vite env `VITE_API_BASE_URL` (defaults to `http://localhost:8000`)

## Project structure (important parts)

```
ACME-FSD-Assignment/
├── backend/
│   ├── app/                # FastAPI application package
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── src/                # React + TypeScript source
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml      # compose file to run both services
└── README.md
```

## Prerequisites

-   Docker & Docker Compose (recommended)
-   Or: Python 3.11+ (for backend) and Node 18+/npm (for frontend)

---

## Running with Docker Compose (recommended)

This will build and start both services. The compose file sets the frontend's Vite env `VITE_API_BASE_URL` to communicate with the backend service by name.

From the repo root:

```bash
docker-compose up --build
```

After startup:

-   Frontend: http://localhost:5173
-   Backend (API): http://localhost:8000

To stop and remove containers:

```bash
docker-compose down
```

---

## Backend - Local development (no Docker)

1. Create and activate a virtual environment

Windows (cmd.exe):

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r backend\requirements.txt
```

2. Run the API (from repository root):

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at http://localhost:8000

### Example request

POST /generate

```bash
curl --location 'http://localhost:8000/generate' \
  --header 'Content-Type: application/json' \
  --data '{"query":"Data Protection and Privacy Act"}'
```

---

## Frontend - Local development (no Docker)

1. Install dependencies and run Vite dev server

```bash
cd frontend
npm install
npm run dev
```

By default Vite uses port 5173. The frontend will attempt to call the backend using the env variable `VITE_API_BASE_URL` (look in `frontend/.env` or pass via process). If you run the backend locally on 8000, no changes are required.

To run the frontend against a different backend URL, set `VITE_API_BASE_URL` before starting Vite, for example:

Windows (cmd.exe):

```bash
set VITE_API_BASE_URL=http://localhost:8000 && npm run dev
```

---

## Dockerfile notes

-   Backend Dockerfile installs minimal runtime and runs uvicorn on port 8000.
-   Frontend Dockerfile runs `npm run dev` (Vite) and exposes port 5173.

## Development tips

-   Use `docker-compose up --build` for an easy start/stop cycle.
-   Backend code is in `backend/app/` and routes are under `backend/app/routes`.
-   Frontend env variables for Vite must be prefixed with `VITE_` to be exposed to the client (`VITE_API_BASE_URL`).

---

If you want, I can:

-   Add healthcheck endpoints and a small Makefile for common commands
-   Add a production-ready nginx setup for serving the built frontend and proxying API requests
