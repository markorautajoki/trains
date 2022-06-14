# Trains application

A small example application that fetches arriving and departing trains for a selected train station. Train stations metadata is
stored to Redis cache. The application consists of a React frontend, NodeJs backend and Redis cache. All of the application components can be run at once using Docker Compose.

# Running in Docker

Requires Docker and Docker Compose

```docker-compose up```

Navigate to http://localhost:3000 to view the application 

# Run backend tests

```cd backend```

```npm install```

```npm test```
