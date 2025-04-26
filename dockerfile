FROM node:20

WORKDIR /app

COPY package.json .

COPY ./src ./src

COPY package-lock.json .

COPY pnpm-lock.yaml .

COPY ./public ./public

RUN npm install -g pnpm

RUN pnpm install

COPY . .

CMD ["pnpm", "dev"]