const db = require("../data/dbConfig");

module.exports = {
    getProjects,
    createProject
}

function getProjects() {
	return db("projects");
}

function createProject(project) {
	return db("projects")
		.insert(project);
}