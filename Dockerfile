FROM node:alpine3.18
WORKDIR /app
COPY ./server/package.json .
RUN cd server && npm install
COPY ./server/ . 
EXPOSE 4000
CMD ["cd","server","&&","npm","run","start"]
