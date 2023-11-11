FROM node:16.13.0-alpine3.14

WORKDIR /app

COPY package*.json .

RUN npm i 

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
