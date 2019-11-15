// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/students.db3',
    },
    useNullAsDefault: true,
    migrations: { 
      directory: './data/migrations'
    },
    seeds: { 
      directory: './data/seeds'
    },
  },

  testing: {
    client: 'sqlite3',
    connection: { 
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
    migrations: { 
      directory: './data/migrations',
    },
    seeds: { 
      directory: './data/seeds'
    }
  }

};

/*

exports.up = function(knex) {
    return knex.schema
    .createTable('student', table => { 
        table.increments()
        table.string('student_name', 128)
        .notNullable()
        table.string('faculty', 128)
        table.string('level', 128)
    })
};

exports.down = function(knex) {
  return knex.schema 
  .dropTableIfExists('student')
};
*/

/*

*/