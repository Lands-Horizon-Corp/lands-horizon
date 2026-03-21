# ---------- Build stage ----------
FROM node:20 AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app (creates /app/dist)
RUN npm run build


# ---------- Production stage ----------
FROM node:20-alpine
WORKDIR /app

# Install a simple static server
RUN npm install -g serve

# Copy built files from builder
COPY --from=builder /app/dist ./dist

# Expose port (Railway uses 3000 by default, but serve uses 3000 too)
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "dist", "-l", "3000"]