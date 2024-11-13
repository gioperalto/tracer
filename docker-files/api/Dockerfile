# Use the official Node.js image as the base
FROM node:16-alpine 

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY api/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY api .

# Expose the port your app listens on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"] 
