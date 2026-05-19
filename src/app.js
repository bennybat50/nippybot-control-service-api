const express = require("express");
const robotRoutes = require("./api/robotRoutes");
const cors = require('cors');
const app = express();


const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/robot", robotRoutes);

module.exports = app;
