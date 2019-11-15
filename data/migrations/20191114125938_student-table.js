
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


