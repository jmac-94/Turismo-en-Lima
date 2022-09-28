# From https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker

FROM node:14-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 4200
CMD [ "./node_modules/@angular/cli/bin/ng", "serve", "--host", "0.0.0.0" ]
