# Aryan MERN Project

This repository contains the Day 1 frontend practice and the Day 2 Student Management REST API.
## Day 1

- Responsive navbar
- Dashboard UI
- Task form
- Task management practice
## Day 2: Student Management API

A REST API for creating and managing student records with Node.js, Express.js, MongoDB, and Mongoose.
### Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
### Installation

```bash
npm install
```
Create a local `.env` file from `.env.example`:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/student_management
```
Make sure MongoDB is running before starting the API.

### Run

```bash
npm start
```
For development with automatic reload:

```bash
npm run dev
```
The API runs at `http://localhost:5000` by default.

### API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/students` | Create a student |
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get one student |
| PUT | `/api/students/:id` | Update a student |
| DELETE | `/api/students/:id` | Delete a student |
| GET | `/api/health` | Check API status |

Required student fields are `name`, `email`, `phone`, `class`, and `rollNumber`. Email and roll number must be unique.

### Sample Request

```http
POST /api/students
Content-Type: application/json
```

```json
{
  "name": "Aarav Sharma",
  "email": "aarav@example.com",
  "phone": "9876543210",
  "class": "10",
  "section": "A",
  "rollNumber": "10A01",
  "gender": "Male",
  "dateOfBirth": "2010-04-15",
  "address": "New Delhi"
}
```

### Sample Success Response

```json
{
  "success": true,
  "message": "Student created successfully",
  "data": {}
}
```

### Error Response

```json
{
  "success": false,
  "message": "Student not found"
}
```

The API uses `201` for creation, `200` for successful operations, `400` for invalid input or duplicate values, `404` for missing resources, and `500` for unexpected server errors.
<<<<<<< HEAD
# Student Management API

A mini REST API for creating and managing student records with Node.js, Express.js, MongoDB, and Mongoose.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
=======
<<<<<<< HEAD
# Aryan MERN Project - Day 1

## Features
- Navbar
- Dashboard UI
- Task Form
=======
# Aryan-MERN
Frontend Development
# Task Management Dashboard

A task management dashboard built as part of the Day 1 Git & GitHub assignment.

## Features

- Responsive Navbar
- Dashboard UI
- Task Form
- Task Management

## Technologies Used

- HTML
- CSS
- JavaScript
- React.js
>>>>>>> origin/main

## Installation

```bash
npm install
<<<<<<< HEAD
```

Create a local `.env` file from `.env.example` and update the MongoDB connection string if needed:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/student_management
```

Make sure MongoDB is running before starting the API.

## Run

Start the server:

```bash
npm start
```

Start with automatic reload during development:

```bash
npm run dev
```

The API runs at `http://localhost:5000` by default.

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/students` | Create a student |
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get one student |
| PUT | `/api/students/:id` | Update a student |
| DELETE | `/api/students/:id` | Delete a student |
| GET | `/api/health` | Check API status |

Required student fields are `name`, `email`, `phone`, `class`, and `rollNumber`. Email and roll number must be unique.

## Sample Request

```http
POST /api/students
Content-Type: application/json
```

```json
{
  "name": "Aarav Sharma",
  "email": "aarav@example.com",
  "phone": "9876543210",
  "class": "10",
  "section": "A",
  "rollNumber": "10A01",
  "gender": "Male",
  "dateOfBirth": "2010-04-15",
  "address": "New Delhi"
}
```

## Sample Success Response

```json
{
  "success": true,
  "message": "Student created successfully",
  "data": {
    "name": "Aarav Sharma",
    "email": "aarav@example.com",
    "phone": "9876543210",
    "class": "10",
    "section": "A",
    "rollNumber": "10A01",
    "gender": "Male",
    "dateOfBirth": "2010-04-15T00:00:00.000Z",
    "address": "New Delhi"
  }
}
```

## Error Response

```json
{
  "success": false,
  "message": "Student not found"
}
```

The API uses `201` for creation, `200` for successful operations, `400` for invalid input or duplicate values, `404` for missing resources, and `500` for unexpected server errors.
=======
>>>>>>> origin/main
>>>>>>> origin/main
