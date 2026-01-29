## Overview
This is a mini internal tool developed for The Flying Panda to monitor visa slot alerts across various countries and cities.
The tool enables internal teams to create, view, update, and manage visa slot alerts.

## Tech Stack
Backend
Node.js
Express
File-based JSON storage

## Frontend
React

## Features
1. Create visa slot alerts
2. View all alerts in a table
3. Filter alerts by country and status
4. Update alert status (Active / Booked / Expired)
5. Delete alerts

## Project Structure
├── backend
│   ├── controllers
│   │   └── alertController.js
│   ├── routes
│   │   └── alertRoutes.js
│   ├── middleware
│   │   ├── validateAlert.js
│   │   └── logger.js
│   ├── utils
│   │   └── fileDb.js
│   ├── alerts.json
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── api
│   │   │   └── alertApi.js
│   │   ├── components
│   │   │   ├── AlertForm.jsx
│   │   │   ├── AlertTable.jsx
│   │   │   └── AlertForm.module.css
│   │   │   └── AlertTable.module.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── README.md

## Backend Setup
cd backend
npm install
npm run dev

Server runs on:
http://localhost:5000

## API Endpoints

|Method| Endpoint         | Query Params            | Description                  |
|------|------------------|-------------------------|------------------------------|
| GET  | /alerts          | country, status         | Get all alerts or filter     |
| POST | /alerts          | —                       | Create a new alert           |
| PUT  | /alerts/:id      | —                       | Update an alert              |
| DELETE | /alerts/:id    | —                       | Delete an alert              |


## Frontend Setup
cd frontend
npm install
npm run dev

## Backend Design Decisions

1. I have used file based JSON to keep it simple . Later for production i would used databse like MongoDB and during Deployment i will use mongoDB Aatlas.

2. I have follows MVC structure (separated controllers, routes , and middleware) beacuse as code base increase it is diffiult to go through codebase so it is better to follow MVC structure. It is scalabe later and it is cleaner approach.

3. I have used validation middleware to prevent improper data entries. Also middlwar can be used to implement role based validation.

4. Used error handling for consistent API responses.

4. I have used logging for watching what's happening in backend. Helps in debugging erros.

## Frontend Design decison
1. The frontend design has been kept simple since this is an internal tool. The design choices were based on simplicity, usability, and proper API integration.

2.  React state was employed for alert data management. Since the scope of the application is small, local state management was adequate. However, for larger applications with global state, Redux Toolkit could be added.

3. A new API layer was established for handling all backend interactions. This ensures that the UI components remain clean and future modifications to the API are easier to handle.

4. The UI design is minimal and distraction-free to ensure that users can easily scan alerts and take actions without any visual distractions.

## Improvements for Production

1. Authentication and role based access.(admin should be able to perfome create update delete operations while user only ge to see.)
2. I would use MongoDB as i talked about it erlier and use mongoDB atlas for deployment.
3. Pagination for large datasets as it makes user experience better if large numbers of alerts grow and for now i have not implemented because their is no need at all for small data.
4. Background jobs for alert expiration
5. Use .env fro both backend and frontend avoid hardcoding values and depoyment becomes easier.

## Why AI was used ?
I have used Ai to write simple boilerlate as it save time and makes devlopment fast.
Logic, API design and other decisions were taken my myself.

## Hosted
Render -> for backend
Vercel -> for frontend
