const db = require('../data/dbConfig');

beforeEach(async () => { 
    await db('students').truncate()
})

module.exports = { 
    insert,
    // update,
    remove, 
    // getAll,
    // findById
};

function insert(student) { 
    return db('students')
    .insert(student)
}

function remove(id) {
    return db('students')
    .where('id', id)
    .del()
}