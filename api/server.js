const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const studentsRouter = require('../student/studentsRouter');
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('api/', studentsRouter);

server.get('/', (req, res) => { 
    res.send("c'est vivant")
})

module.exports = server;