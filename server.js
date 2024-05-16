const io = require('socket.io')(3000, {
    cors: {
        origin: '*'
    }
})
const users = {}

io.on('connection', socket => {
    // console.log('new User')
    // socket.emit('chat-message', 'Hello world')

    socket.on('new-user', name => {
        console.log(socket)
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name)
    })
    socket.on('send-chat-message', message => {
        // console.log(message)
        //socket.broadcast.emit will send message to everyone except to self
        socket.broadcast.emit('chat-message', {message : message, name: users[socket.id]})
    })
    socket.on('disconnect', ()=>{
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id]
    })
    
})