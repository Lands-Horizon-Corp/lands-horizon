# ---------- Build stage ----------
FROM oven/bun:latest AS builder
WORKDIR /app

# 1. Copy the lockfile and package.json
COPY bun.lockb package.json ./
RUN bun install --frozen-lockfile

# 2. Copy the .env file BEFORE building
# Make sure .env is in your local root directory
COPY .env .env

# 3. Copy the rest of the code
COPY . .

# 4. Vite will now see the .env file during the build
RUN bun run build

# ---------- Production stage ----------
FROM oven/bun:distroless AS production
WORKDIR /app

COPY --from=builder /app/.output ./.output

# Copy the .env to the production stage as well if 
# your server (Nitro) needs it at runtime
COPY --from=builder /app/.env ./.env

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000
CMD ["./.output/server/index.mjs"]