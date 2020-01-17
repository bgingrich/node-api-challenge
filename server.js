const express = require('express');

const projectsRouter = require('./projects/projectsRouter.js');
const actionsRouter = require('./actions/actionsRouter.js');

const server = express();

server.use('/projects', projectsRouter);
server.use('/actions', actionsRouter);


server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1>`)
});

module.exports = server;