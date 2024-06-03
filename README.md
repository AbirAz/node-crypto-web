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