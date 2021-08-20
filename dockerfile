FROM node:14.15.4

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

ENV PORT 4500

EXPOSE $PORT

CMD ["npm", "run", "start:dev"]