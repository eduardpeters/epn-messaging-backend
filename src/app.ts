import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import createChatHandlers from './handlers/chatHandlers';
import loginRoute from './routes/loginRoute';
import type { User } from './epn.d.ts';

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

let users: User[] = [];

const {
    newUser,
    disconnectUser,
    typingUser,
    newMessage,
    connectionError
} = createChatHandlers(io, users);

io.on('connection', (socket) => {
    console.log(`${socket.id} user just connected!`);
    socket.on('newUser', newUser);
    socket.on('disconnect', disconnectUser);
    socket.on('typing', typingUser);
    socket.on('message', newMessage);
    socket.on("connect_error", connectionError);
});

app.use('/login', loginRoute);

app.get('/api', (req, res) => {
    res.json({
        message: 'Hello World!',
    });
});

server.listen(PORT, () => {
    return console.log(`Up and running! Listening on port: ${PORT}`);
});
