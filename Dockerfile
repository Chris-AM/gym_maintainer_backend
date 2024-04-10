FROM node:20.10.0

ENV NODE_ENV=development
ENV POSTGRES_USER=${DB_TYPE}
ENV POSTGRES_DB=${DB_NAME}
ENV POSTGRES_PASSWORD=${DB_PASSWORD}

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install 

COPY . .

CMD ["yarn", "start:dev"]
