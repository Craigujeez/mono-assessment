FROM node:17.3.0-stretch

RUN mkdir -p /app

WORKDIR /app

COPY package.json .

COPY yarn.lock .

COPY .yarnrc .

RUN mkdir -p .cache

RUN yarn install

COPY . .

ARG CACHEBUST=1

CMD yarn start
