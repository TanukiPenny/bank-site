FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN next build

EXPOSE 8081

CMD [ "npm", "run", "preview" ]