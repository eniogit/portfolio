FROM node:22.11.0-alpine

WORKDIR /usr/app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "start"]