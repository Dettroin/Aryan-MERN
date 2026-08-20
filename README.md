# Task Management Backend

Day 3 Node.js + Express backend with MongoDB and CRUD APIs.

## Setup

```bash
npm install
```

Copy `.env.example` to `.env` and set your MongoDB connection string.

```bash
npm run dev
```

Server runs on `http://localhost:5000`.

## APIs

- POST `/api/tasks`
- GET `/api/tasks`
- GET `/api/tasks/:id`
- PUT `/api/tasks/:id`
- DELETE `/api/tasks/:id`

## Task fields

- title
- description
- assignedTo
- priority
- status
- dueDate
