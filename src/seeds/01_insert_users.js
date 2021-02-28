const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 * Delete all existing entries and seed users table.
 *
 * @param   {Object} knex
 * @returns {Promise}
 */
function seed(knex) {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          name: 'Hamlet Maharjan',
          username: 'hamlet11',
          email: 'hams@gmail.com',
          password: bcrypt.hashSync('password', saltRounds),
          role: 'admin',
          updated_at: new Date(),
        },
        {
          name: 'John Doe',
          username: 'johndoe',
          email: 'john@gmail.com',
          password: bcrypt.hashSync('john', saltRounds),
          role: 'user',
          updated_at: new Date(),
        },
      ]);
    });
}


module.exports = { seed };