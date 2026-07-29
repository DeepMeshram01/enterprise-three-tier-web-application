# Use official Node.js LTS image
FROM node:22-alpine

# Create application directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Expose backend port
EXPOSE 3001

# Start the application
CMD ["npm", "start"]