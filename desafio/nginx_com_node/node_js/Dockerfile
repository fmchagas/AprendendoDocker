FROM node:16.19.0-slim

WORKDIR /usr/src/app

RUN apt-get update && \
    npm init -y  \
    && npm install express --save \
    && npm install mysql --save

COPY ./index.js .
COPY ./package.json .


#EXPOSE 3000

#CMD ["node", "index.js"]