const db = require("../data/dbConfig");

module.exports = {
	getTasks,
	createTask
};

function getTasks() {
	return db("tasks")
		.join("projects", "projects.id", "tasks.project_id")
		.select(
			"tasks.id",
			"tasks.description",
			"tasks.notes",
			"tasks.completed",
			"projects.id as project_id",
			"projects.name as project_name",
			"projects.description as project_description"
		);
}

function createTask(task) {
	return db("tasks")
		.insert(task);
}