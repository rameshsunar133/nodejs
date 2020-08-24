FROM node:latest
WORKDIR /app
USER root
COPY ./ ./
EXPOSE 80
EXPOSE 3000
RUN npm install
CMD [ "npm", "start" ]