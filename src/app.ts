import config from 'config';
import express from 'express';
import usersRouter from './routers/users'
import githubRouter from './routers/github'
import guestsRouter from './routers/guests'
import path from 'path';
import notFound from './middlewares/error/404';
import error from './middlewares/error/error';
import githubAuth from './middlewares/github-auth';
import session from 'express-session';

declare global{
    namespace Express {
        interface User{
            id: number;
        }
    }
}

// app config
const app = express();
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))

// middlewares
app.use(session({
    secret: 'secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    },
    resave: false,
    saveUninitialized: false
}))
app.use(githubAuth.initialize());
app.use(githubAuth.session());

// routing
app.use('/', guestsRouter);
app.use('/users', usersRouter);
app.use('/github', githubRouter);


// errors
app.use(notFound);
app.use(error)

//  NODE_ENV=staging npm start
app.listen(config.get('app.port'), () => {
    console.log(`${config.get(`app.name`)} started! | SECRET: ${config.get(`app.secret`)} | ENV:${config.get(`app.ENV`)} | PORT:${config.get(`app.port`)}`)
})