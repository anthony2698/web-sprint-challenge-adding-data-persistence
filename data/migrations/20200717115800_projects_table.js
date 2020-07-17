const { table } = require("../dbConfig");

exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('id');
        tbl.text('name', 128).notNullable();
        tbl.text('description', 256);
        tbl.boolean('completed').defaultTo(false);
    })
    .createTable('tasks', tbl => {
        tbl.increments('id');
        tbl.text('description', 256).notNullable();
        tbl.text('notes', 128);
        tbl.boolean('completed').defaultTo(false);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
      })
      .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('resource_name', 128).notNullable();
        tbl.text('description', 256);
      })
      .createTable('project_resources', tbl => {
          tbl.increments("id");
          tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
          tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
      })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
};
