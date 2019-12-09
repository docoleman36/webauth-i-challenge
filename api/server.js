const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const authRouter = require('../auth/auth-router.js');
const userRouter = require('../users/users-router');

const server = express();

const sessionConfig = {
    name: "session",
    secret: "some secret here",
    cookie: {
        maxAge: 1000 * 30,
        secure: false, //true in production
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);

server.get('/', (req, res) => {
    res.json({ api: "IT's alive " })
})


module.exports = server;