const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const postRoutes = require('./routes/postRoute')
server.use('/', postRoutes)

module.exports = server