FROM node:12.16

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

RUN tsc