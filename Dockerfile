FROM node:16.14

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

COPY .env .env

CMD ["pnpm", "dev"]
