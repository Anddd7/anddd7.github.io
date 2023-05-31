FROM node:latest

LABEL description="Running docsify in server mode (SSR)"

WORKDIR /docs
  
RUN npm install -g docsify-cli@latest
  
EXPOSE 3000/tcp
  
ENTRYPOINT docsify serve .
