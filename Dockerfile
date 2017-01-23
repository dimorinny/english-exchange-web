FROM jmfirth/webpack:7

ENV NODE_ENV production

WORKDIR /web

ADD package.json package.json
RUN npm install

ADD . .
RUN webpack

VOLUME /web/dist
