// Server Imports
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 4000;
// Middleware Imports
const io = require('socket.io')(server);
const graphQLExpress = require('express-graphql')

app.use('/graph', graphQLExpress({
  graphiql: true
}))

server.listen(port, ()=>{
  console.log(`API server waiting for request on port ${port}`);
})
