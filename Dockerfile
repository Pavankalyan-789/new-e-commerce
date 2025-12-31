################################
# Stage 1: Build Frontend
################################
FROM node:18-alpine AS frontend-build

WORKDIR /app/frontend

# Copy only package files first (cache optimization)
COPY frontend/package*.json ./

RUN npm install --legacy-peer-deps

# Copy frontend source
COPY frontend/ .

# Build frontend
RUN npm run build


################################
# Stage 2: Backend Runtime
################################
FROM node:18-alpine

WORKDIR /app

# Install build dependencies for backend
RUN apk add --no-cache python3 make g++ bash

# Copy backend package files
COPY backend/package*.json ./

RUN npm install --legacy-peer-deps

# Copy backend source code
COPY backend/ .

# Copy frontend build output into backend public folder
COPY --from=frontend-build /app/frontend/dist ./public

EXPOSE 3000

CMD ["node", "server.js"]
