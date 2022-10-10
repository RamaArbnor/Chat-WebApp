const express = require("express");
const cors = require("cors");
require('dotenv').config

const app = express();
app.use((express.json()))
app.use(cors())

const server = require('http').createServer(app)
const io = require('socket.io')(server, {
   cors:  {
      origin: '*'
}})


io.on('connection', (socket) => {

   console.log(`id ${socket.id} connected`)

   socket.on('sendMessage', (data)=> {
      socket.broadcast.emit('receiveMessage', data);
      console.log(data)
   })

})

// PORT
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});
