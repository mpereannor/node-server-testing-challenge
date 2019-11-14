const request = require('supertest');
const server = require('./server');


describe('server', () => { 
    describe('[GET] / endpoint', () => { 
        test('the db env is testing', () => { 
            expect(process.env.DB_ENV).toBe('testing')
        })

        test('use supertest syntax', () => {
            return request(server).get('/')
            .expect("c'est vivant")
        })
    })
})