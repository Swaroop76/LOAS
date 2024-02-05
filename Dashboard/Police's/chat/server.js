const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    // Event listener for receiving chat messages from clients
    socket.on('chatMessage', (message) => {
        console.log('Message received:', message);
        io.emit('chatMessage', message); // Broadcast message to all connected clients
    });

    // Event listener for disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
