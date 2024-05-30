import config from 'config';
import express from 'express';

const app = express();

//  NODE_ENV=staging npm start
app.listen(config.get('app.port'), () => {
    console.log(`${config.get(`app.name`)} started | with secret ${config.get(`app.secret`)} | in ENV:${config.get(`app.ENV`)} | on port:${config.get(`app.port`)}`)
})