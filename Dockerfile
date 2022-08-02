FROM node:14

WORKDIR /
COPY package*.json .
RUN npm install
RUN npm install -g nodemon

COPY . .
CMD npm start