FROM node:16-alpine
ENV NODE_ENV=production
WORKDIR /
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 80
CMD ["npm", "start"]
