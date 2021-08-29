
exports.up = function(knex) {
  return knex.schema
    .createTable('project', tbl => {
      tbl.increments('project_id');
      tbl.text('project_name', 128)
        .unique()
        .notNullable();
      tbl.text('project_description');
      tbl.string('project_completed')
        .defaultTo('false');  
    })
    .createTable('resource', tbl => {
      tbl.increments('resource_id');
      tbl.text('resource_name',128)
        .unique()
        .notNullable();
      tbl.text('resource_description');
    })
    .createTable('task', tbl => {
      tbl.increments('task_id');
      tbl.text('task_description')
        .notNullable();
      tbl.text('task_notes');
      tbl.string('task_completed')
        .defaultTo('false')
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('project')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
    .createTable('resource assignment', tbl => {
      tbl.integer('project_resources')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('project')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
  
};
