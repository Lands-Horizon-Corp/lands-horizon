# ---------- Build stage ----------
FROM oven/bun:latest AS builder
WORKDIR /app

# Copy lock file and package.json
COPY bun.lockb package.json ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy full source code
COPY . .

# Build the project (TanStack Start outputs to .output)
RUN bun run build

# ---------- Production stage ----------
# Using the official slim image for a smaller footprint
FROM oven/bun:distroless AS production
WORKDIR /app

# Copy the entire .output directory (contains both server and public assets)
COPY --from=builder /app/.output ./.output

# TanStack Start / Nitro defaults
ENV NODE_ENV=production
ENV PORT=3000

# Expose the port
EXPOSE 3000

# Run the Nitro server using Bun
CMD ["./.output/server/index.mjs"]