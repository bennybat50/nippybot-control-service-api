const express = require("express");
const robotRoutes = require("./api/robotRoutes");
const cors = require('cors');
const app = express();


 
app.use(cors({
    origin: ['http://localhost:5173', 'https://botcontrol.nippybot.com/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
     allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());

app.use("/api/robot", robotRoutes);

module.exports = app;
