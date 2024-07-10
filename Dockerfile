FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN PORT=8081

RUN npm run build

EXPOSE 8081

CMD [ "npm", "run", "start" ]