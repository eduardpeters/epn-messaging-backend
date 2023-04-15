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

io.on('connection', (socket) => {
    console.log(`${socket.id} user just connected!`);
    socket.on('disconnect', () => {
        console.log('A user disconnected');
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
