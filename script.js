const socket = io('http://10.0.0.55:3000')

socket.on('chat-message', data => {
    console.log(data)
})