/**
 * Create table `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function up(knex) {
  return knex.schema.createTable('articles', table => {
    table.increments().primary();
    table.string('title');
    table.string('description');
    table.string('image');
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id');
    table.timestamps();
  });
}

/**
 * Drop `articles`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function down(knex) {
  return knex.schema.dropTable('articles');
}

module.exports = { up, down };
