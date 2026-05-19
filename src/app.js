const express = require("express");
const robotRoutes = require("./api/robotRoutes");
const cors = require('cors');
const app = express();



app.use(cors({
    origin: 'https://botcontrol.nippybot.com',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use("/api/robot", robotRoutes);

module.exports = app;
