// Server Imports
require('dotenv').config();
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 4000;
// Middleware Imports
const io = require('socket.io')(server);
const graphQLExpress = require('express-graphql');
const graphQLSchema = require('./graphql/query/schema/schema');
const mutation = require('./graphql/mutations/mutations');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI).then(
  ()=>{console.log('Database Connected')},
  err=>{console.log(`Error Connecting To Database ${err}`)}
)

app.use('/graph', graphQLExpress({
  graphiql: true,
  schema: graphQLSchema
}))

server.listen(port, ()=>{
  console.log(`API server waiting for request on port ${port}`);
})
