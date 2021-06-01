FROM node:12-alpine
WORKDIR /usr/src/app
COPY ./backend/package*.json ./
RUN npm install

COPY ./backend .

EXPOSE 3000
CMD [ "node", "index.js" ]