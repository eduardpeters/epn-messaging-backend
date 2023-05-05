import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.CORS_ORIGIN
    }
});

let users = [];

io.on('connection', (socket) => {
    console.log(`${socket.id} user just connected!`);

    socket.on('newUser', (data) => {
        users.push(data);
        io.emit('newUserResponse', users);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected: ', socket.id);
        users = users.filter(user => user.socketID !== socket.id);
        io.emit('newUserResponse', users);
        socket.disconnect();
    });

    socket.on('message', (data) => {
        io.emit('messageResponse', data);
    });

    socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
    });
});

app.get('/api', (req, res) => {
    res.json({
        message: 'Hello World!',
    });
});

server.listen(PORT, () => {
    return console.log(`Up and running! Listening on port: ${PORT}`);
});
