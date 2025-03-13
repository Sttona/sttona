# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Development
FROM node:18-alpine AS development
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Stage 3: Production
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/build /app
COPY --from=builder /app/package.json /app
RUN npm install --only=production
EXPOSE 3000
CMD ["npm", "start"] 