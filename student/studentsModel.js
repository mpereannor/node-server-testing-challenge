const db = require('../data/dbConfig');

module.exports = { 
    insert,
    // update,
    remove, 
    // getAll,
    // findById
};

function insert(student) { 
    return db('student')
    .insert(student)
}

function remove(id) {
    return db('student')
    .where('id', id)
    .del()
}