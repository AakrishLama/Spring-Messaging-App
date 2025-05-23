# Spring-Messaging-App

This is a full-stack **Live Chat Application** built with:

- 🧠 **Spring Boot** (WebSocket + STOMP + MongoDB) for the backend
- ⚛️ **React (Vite)** for the frontend with **Tailwind CSS**, **React Router**, **React Hot Toast**, and **SockJS/STOMP** for real-time messaging

## 🗂 Project Structure
---

## 🚀 Backend - Spring Boot

### 📦 Tech Stack

- Spring Boot
- STOMP over WebSockets (`/chat`)
- MongoDB for storing messages
- Tested using Postman
- Running on **port `8080`**

### ✅ Features

- WebSocket configuration with STOMP
- REST API endpoints to fetch messages by room ID
- MongoDB for persistent chat history
- Tested with Postman

### ▶️ Run the Backend

1. Open the `backend/` folder
2. Start MongoDB (e.g., `mongod` local server.)
3. Run the application:

   `mvnw spring-boot:run`

### 🎨 Frontend - React with Vite
### 📦 Tech Stack
- React (Vite)

- Tailwind CSS for styling

- React Router for routing

- React Hot Toast for notifications

- SockJS and STOMP.js for WebSocket communication

### 🛠 Setup Instructions
- Navigate to the frontend/ folder:
 `cd frontend`
- Install required dependencies:
 `npm install`
- Run the frontend
 `npm run dev`


| Component | Port  | Description                 |
| --------- | ----- | --------------------------- |
| Backend   | 8080  | Spring Boot API + WebSocket |
| Frontend  | 3000  | Vite React UI               |
| MongoDB   | 27017 | Database for chat history   |


