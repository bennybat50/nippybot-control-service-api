const express = require("express");
const robotRoutes = require("./api/robotRoutes");

const app = express();
app.use(express.json());

app.use("/api/robot", robotRoutes);

module.exports = app;
