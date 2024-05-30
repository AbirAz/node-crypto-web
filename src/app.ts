import config from 'config';
import express from 'express';
import usersRouter from './routers/users'
import path from 'path';

const app = express();
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))

app.use('/users', usersRouter);

//  NODE_ENV=staging npm start
app.listen(config.get('app.port'), () => {
    console.log(`${config.get(`app.name`)} started! | SECRET: ${config.get(`app.secret`)} | ENV:${config.get(`app.ENV`)} | PORT:${config.get(`app.port`)}`)
})