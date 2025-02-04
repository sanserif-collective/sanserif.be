FROM node:20-alpine AS base
WORKDIR /app
RUN npm i -g pnpm

FROM base AS dependencies
COPY . .
# COPY pnpm-*.yaml .
# COPY strapi/package.json strapi/package.json
RUN pnpm --filter strapi i --frozen-lockfile

FROM base AS build
COPY --from=dependencies /app .
COPY strapi strapi
RUN pnpm --filter strapi build

FROM gcr.io/distroless/nodejs20-debian12:nonroot
WORKDIR /app
COPY --from=build /app .
EXPOSE 1337
CMD ["strapi/node_modules/@strapi/strapi/bin/strapi.js", "start"]
