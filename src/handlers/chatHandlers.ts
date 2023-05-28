export default function(io, users) {
    return {
        newUser: function (data) {
            // @ts-ignore
            const socket: Socket<ClientEvents, ServerEvents> = this;
            
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
        }
    }
}