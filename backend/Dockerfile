FROM node:18-alpine

WORKDIR /opt/app

COPY package*.json ./
COPY ./src ./src

RUN npm install

EXPOSE 8080

ENTRYPOINT ["node", "src/index.js"]
