# Stage 1: Build Frontend
FROM node:20-alpine AS frontend-build
WORKDIR /app/frontend

# Copy frontend package files
COPY frontend/package*.json ./
RUN npm install

# Copy frontend source and build
COPY frontend/ .
RUN npm run build

# Stage 2: Setup Backend (Production)
FROM node:18-alpine
WORKDIR /app

# Copy backend package files
COPY backend/package*.json ./
RUN npm install

# Copy backend source
COPY backend/ .

# Copy built frontend assets to 'public' folder in backend
COPY --from=frontend-build /app/frontend/dist ./public

# Start the server
CMD ["node", "server.js"]
