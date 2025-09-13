# 1. Base image
FROM node:18

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy all other files
COPY . .

# 5. Set environment variables (optional if you're using .env separately)
ENV MONGO_URI=mongodb://host.docker.internal:27017/salon_booking

# 6. Expose the port your app runs on
EXPOSE 5002

# 7. Start the app
CMD ["node", "server.js"]
