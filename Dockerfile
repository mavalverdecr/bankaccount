# syntax=docker/dockerfile:1
FROM node:current-alpine3.15
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY ./src ./