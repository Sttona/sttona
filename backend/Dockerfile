# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
# Make sure the build script exits with the right code
RUN npm run build || exit 1

# Stage 2: Production
FROM node:18-alpine
WORKDIR /app
# Copy the built files and package.json
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json /app/
# Install only production dependencies
RUN npm install --production
# Add dotenv dependency explicitly
RUN npm install dotenv
EXPOSE 4000
CMD ["node", "dist/server.js"] 