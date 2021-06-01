FROM node:14
WORKDIR /usr/src/app
COPY ./docker2/backend/package*.json ./
RUN npm install

COPY ./docker2/backend .

EXPOSE 50000
CMD [ "node", "index.js" ]