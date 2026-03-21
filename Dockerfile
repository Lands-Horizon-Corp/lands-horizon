# ---------- Build stage ----------
FROM jarredsumner/bun:latest AS builder
WORKDIR /app

# Copy lock file and package.json
COPY bun.lockb package.json ./

# Install dependencies
RUN bun install

# Copy full source code
COPY . .

# Build the project
RUN bun run build

# ---------- Production stage ----------
FROM jarredsumner/bun:alpine AS production
WORKDIR /app

# Install a lightweight static server
RUN bun install -g serve

# Copy the build output from builder
COPY --from=builder /app/.output/public ./public

# Expose the port Railway expects
EXPOSE 3000

# Serve the static files
CMD ["serve", "-s", "public", "-l", "3000"]