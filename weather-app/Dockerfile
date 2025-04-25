# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# i am creating a dirctory
RUN mkdir /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app
COPY . .

# Expose port for Vite frontend (default 5173) or backend (custom)
EXPOSE 3000

# Default to Vite dev (you can switch to backend start if you have one)
CMD ["npm", "run", "dev"]
