
const Students = require('./studentsModel');
const db = require('../data/dbConfig');

beforeEach(async () => { 
    await db('student').truncate()
})


describe('Students model', () => { 
    describe('insert function', () => { 
        let stud
        test('should insert a student name, department and level', async () => { 
            await Students.insert({ 
                student_name: 'Edwin',
                faculty: 'geology',
                level: 'beginner'
            })
            await Students.insert({ 
                student_name: 'Appiah',
                faculty: 'arts',
                level: 'beginner'
            })

            await Students.insert({ 
                student_name: 'Appiah',
                faculty: 'arts',
                level: 'beginner'
            })

            await Students.insert({ 
                student_name: 'Appiah',
                faculty: 'arts',
                level: 'beginner'
            })

            stud = await db('student')
            expect(stud).toHaveLength(2)
        })
    });

     describe('delete function', () => { 
         test('should delete a specific student information from the database', 
         async () => { 
             
             await Students.remove(3)
         })
     })
})
