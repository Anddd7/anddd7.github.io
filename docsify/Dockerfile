FROM node:latest

RUN npm install -g docsify-cli@latest

WORKDIR /docs

COPY ./docs /docs
  
ENTRYPOINT docsify serve .
