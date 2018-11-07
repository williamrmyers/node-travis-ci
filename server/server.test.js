const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;


describe('Server', ()=>{
  describe('Get /', ()=>{
    it('Should return hello world.', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect( (res)=>{
          expect(res.body).toInclude({ error: 'Page Not found' })
        })
        .end(done);
    })
  });
  describe('GET /users', ()=>{
    it('Should return William as a user', (done)=>{
      request(app)
        .get('/users')
        .expect(200)
        .expect((res)=>{
          expect(res.body.users[0]).toInclude({ name:'William', age: 25 })
        })
        .end(done);
    });
  });
});
