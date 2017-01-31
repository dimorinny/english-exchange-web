FROM jmfirth/webpack:7

ARG base

ENV NODE_ENV production
ENV BASE $base

WORKDIR /web

ADD package.json package.json
RUN npm install

ADD . .
RUN webpack

VOLUME /web/dist
