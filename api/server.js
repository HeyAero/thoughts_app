const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const postRoutes = require('./routes/postRoute')
server.use('/post', postRoute)
//--> check that route

// Root route
server.get('/', (req, res) => res.send('Hello, user!'))

module.exports = server