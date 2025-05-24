FROM node:20.4.0-alpine
ENV NODE_OPTIONS="--max-old-space-size=2048"

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm ci

COPY . /app

RUN npm run build
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build"]