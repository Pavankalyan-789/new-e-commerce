################################
# Stage 1: Frontend Build (Node 20)
################################
FROM node:20-alpine AS frontend-build

WORKDIR /app/frontend

RUN apk add --no-cache python3 make g++ bash

COPY frontend/package*.json ./
RUN npm install --legacy-peer-deps

COPY frontend/ .
RUN npm run build


################################
# Stage 2: Backend Runtime (Node 18)
################################
FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache python3 make g++ bash

COPY backend/package*.json ./
RUN npm install --legacy-peer-deps

COPY backend/ .

COPY --from=frontend-build /app/frontend/dist ./public

EXPOSE 3000
CMD ["node", "server.js"]
