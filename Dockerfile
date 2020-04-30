FROM node:alpine
WORKDIR /usr/app
COPY . .
RUN npm install -g typescript
RUN npm i
RUN tsc