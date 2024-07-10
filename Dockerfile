FROM node:18-slim AS base

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#   Build stage
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FROM base AS builder

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn run build

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#   Run stage
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FROM base AS final

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install --frozen-lockfile --production

COPY --from=builder /app/dist ./dist

EXPOSE 4000

CMD ["node", "dist/index"]
