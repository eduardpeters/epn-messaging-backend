import type { Server } from 'socket.io';
import type { User } from '../epn.d.ts';

interface MessageData {
    text: string;
    name: string;
    id: string;
    socketID: string;
}

export default function (io: Server, users: User[]) {
    return {
        newUser: function (data: User) {
            users.push(data);
            io.emit('newUserResponse', users);
        },
        disconnectUser: function () {
            // @ts-ignore
            const socket: Socket<ClientEvents, ServerEvents> = this;

            console.log('A user disconnected: ', socket.id);
            users = users.filter(user => user.socketID !== socket.id);
            socket.broadcast.emit('newUserResponse', users);
            socket.disconnect();
        },
        typingUser: function (data: string) {
            // @ts-ignore
            const socket: Socket<ClientEvents, ServerEvents> = this;

            socket.broadcast.emit('typingResponse', data);
        },
        newMessage: function (data: MessageData) {
            io.emit('messageResponse', data);
        },
        connectionError: function (error: { message: string }) {
            console.log(`connect_error due to ${error.message}`);
        }
    }
}