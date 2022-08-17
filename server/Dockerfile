FROM node:16.15

WORKDIR /usr/local/user

ENV PORT=3000
ENV MONGO_PASS=v65mwEgUeTpXfvbO

COPY package.json package-lock.json /usr/local/user/

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./

CMD ["npm", "run", "start"]