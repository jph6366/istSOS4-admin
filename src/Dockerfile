# FROM denoland/deno:latest

# WORKDIR /appp

# COPY .  .

# EXPOSE 3000

# CMD ["deno", "run", "dev"]

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]