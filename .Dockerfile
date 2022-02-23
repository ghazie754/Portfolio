FROM node:14-alpine

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN yarn install --frozen-lockfile && yarn start

RUN echo hello 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]