/**
 * Create users table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function up(knex) {
  return knex.schema.createTable('users', table => {
    table.increments().primary();
    table.string('username');
    table.string('name');
    table.string('email');
    table.string('password');
    table.enu('role', ['admin', 'user']).defaultTo('user');
    table.timestamps();
  });
}

/**
 * Drop users table.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
function down(knex) {
  return knex.schema.dropTable('users');
}

module.exports = { up, down };