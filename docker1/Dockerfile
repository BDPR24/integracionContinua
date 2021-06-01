FROM node:14
WORKDIR /usr/src/app
COPY ./docker1/backend/package*.json ./
RUN npm install

COPY ./docker1/backend .

EXPOSE 40000
CMD [ "node", "index.js" ]