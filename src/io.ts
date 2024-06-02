import config from 'config';
import { Server } from 'socket.io';

const io = new Server({
    cors: {
        origin: "*"
    }
});

io.on('connection', socket => {
    console.log('new client connected...')
})

io.listen(config.get('io.port'));
console.log(`io server started on port: ${config.get('io.port')}`);