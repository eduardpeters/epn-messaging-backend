export default function (io, users) {
    return {
        newUser: function (data) {
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
        typingUser: function (data) {
            // @ts-ignore
            const socket: Socket<ClientEvents, ServerEvents> = this;
            
            socket.broadcast.emit('typingResponse', data);
        },
        newMessage: function (data) {
            io.emit('messageResponse', data);
        },
        connectionError: function (error) {
            console.log(`connect_error due to ${error.message}`);
        }
    }
}