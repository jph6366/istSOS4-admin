# FROM denoland/deno:latest

# WORKDIR /app

# COPY .  .

# EXPOSE 3000

# CMD ["deno", "run", "dev"]

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]