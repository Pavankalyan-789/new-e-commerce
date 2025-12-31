################################
# Stage 1: Frontend build
################################
FROM node:18-alpine AS frontend-build

WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install --legacy-peer-deps

COPY frontend/ .
RUN npm run build


################################
# Stage 2: Backend runtime
################################
FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY backend/package*.json ./
RUN npm install --legacy-peer-deps

COPY backend/ .

COPY --from=frontend-build /app/frontend/dist ./public

EXPOSE 3000
CMD ["node", "server.js"]
