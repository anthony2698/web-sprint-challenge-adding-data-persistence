const express = require("express");

const projectsRouter = require("../projects/projectsRouter");
const tasksRouter = require("../tasks/tasksRouter");
const resourcesRouter = require("../resources/resourcesRouter");

const server = express();

server.use(express.json());

server.use("api/projects/", projectsRouter);
server.use("api/tasks/", tasksRouter);
server.use("api/resources/", resourcesRouter);

server.get("/", (req, res) => {
    res.status(200).json({ API: "Running..." });
});

module.exports = server;