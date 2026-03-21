# ---------- Build stage ----------
FROM oven/bun:latest AS builder
WORKDIR /app

# 1. TELL DOCKER TO EXPECT THESE FROM RAILWAY
ARG VITE_APP_NAME
ARG VITE_LOGO

# 2. MAKE THEM ACCESSIBLE TO VITE/BUN DURING "RUN"
ENV VITE_APP_NAME=$VITE_APP_NAME
ENV VITE_LOGO=$VITE_LOGO

# Copy lock file and package.json
# Note: Check if yours is bun.lockb or bun.lock (usually .lockb)
COPY bun.lockb package.json ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy full source code
COPY . .

# 3. BUILD THE PROJECT
# Vite will now see VITE_APP_NAME and VITE_LOGO and bake them into the JS
RUN bun run build

# ---------- Production stage ----------
FROM oven/bun:distroless AS production
WORKDIR /app

# Copy the entire .output directory
COPY --from=builder /app/.output ./.output

# Pass the vars to the production stage as well
ARG VITE_APP_NAME
ARG VITE_LOGO
ENV VITE_APP_NAME=$VITE_APP_NAME
ENV VITE_LOGO=$VITE_LOGO

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Start the Nitro server
CMD ["./.output/server/index.mjs"]