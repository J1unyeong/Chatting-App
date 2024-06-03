const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Message = require('./models/Message')

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error('MongoDB connection error', err);
})

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    Message.find().sort({ timestamp: 1 }).then(messages => {
        socket.emit('load messages', messages);
    }).catch(err => console.error(err));

    socket.on('discoonect', () => {
        console.log('A user disconnected');
    });

    socket.on('chat message', (msg) => {
        const message = new Message({ content: msg });
        message.save().then(() => {
            io.emit('chat message', msg);
        }).catch(err => console.error(err));
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});