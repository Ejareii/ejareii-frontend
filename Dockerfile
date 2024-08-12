FROM node:20-alpine3.17 as builder 

WORKDIR /app

COPY package*.json .

RUN npm i 

COPY . .

RUN npm run build

#EXPOSE 3000
#CMD ["npm", "start"]

#######
FROM node:20-alpine3.17 as runner 

WORKDIR /app

COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .

#RUN npm install --only=prod
COPY --from=builder /app/.env ./
COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

#RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]