FROM node:14-alpine 

WORKDIR /app

RUN npm install -g @angular/cli@12

EXPOSE 4200 49153 
