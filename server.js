const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 4000;

server.listen(port, ()=>{
  console.log(`API server waiting for request on port ${port}`);
})
