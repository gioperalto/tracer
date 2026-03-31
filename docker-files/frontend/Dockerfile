FROM node:16-alpine 

WORKDIR /usr/src/app

COPY frontend /usr/src/app

RUN npm install -g @angular/cli@13.0.1

RUN npm install

CMD ["ng", "serve", "--configuration=production", "--host", "0.0.0.0"]