const db = require("../data/dbConfig");

module.exports = {
	getResources,
	createResource,
};

function getResources() {
	return db("resources");
}

function createResource(resource) {
	return db("resources")
		.insert(resource);
}