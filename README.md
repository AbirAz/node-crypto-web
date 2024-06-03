# node-crypto-web
node.js john bryce course

Terminal steps:
1) npm i
2) npm start - start the app
3) npx ts-node src/worker.ts
4) npx ts-node src/io.ts

Docker steps:
1) docker run --name mysql -d -e MYSQL_ALLOW_EMPTY_PASSWORD=1 -e MYSQL_DATABASE=cryptoapp -e MYSQL_TCP_PORT=3306 -p 3310:3306 mysql:latest
2) docker run --name mongodb -e MONGO_INITDB_DATABASE=cryptoapp -d -p 27017:27017 mongo:latest

docker file steps:
io:
1) docker build -t aviraz/io-6156:1.0 --file Dockerfile.io .
2) docker run --name 6156-io -d -p 3001:3001 aviraz/io-6156:1.0

worker:
3) docker build -t aviraz/worker-6156:1.0 --file Dockerfile.worker .
4) docker run --name 6156-worker -e NODE_ENV=docker -d aviraz/worker-6156:1.0

app:
5) docker build -t aviraz/app-6156:1.0 --file Dockerfile.app .
6) docker run --name 6156-app -e NODE_ENV=docker -d -p 3000:3000 aviraz/app-6156:1.0