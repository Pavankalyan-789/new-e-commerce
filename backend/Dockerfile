# backend/Dockerfile
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose port your backend uses
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
