const express = require('express');

const server = express();
// 4. Import the adopters router
const adoptersRouter = require('./adopters/adopters-router');
const DogsRouter = require('./dogs/dogs-router');

server.use(express.json());
server.use('/api/adopters', adoptersRouter)
server.use('/api/dogs', DogsRouter)

// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Shelter API</h>
    <p>Welcome to the Lambda Shelter API</p>
  `);
});

module.exports = server;
