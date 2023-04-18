FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod -R 777 .next

CMD ["npm", "run", "dev"]