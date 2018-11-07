const expect = require('expect');

const utils = require('./utils')



describe('Utils', ()=>{

  describe('#Add', ()=>{
    it('should add two numbers.', ()=>{
      let res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
    });

    it('should async add two numbers.', (done)=>{
      utils.asyncAdd(4,3, (sum)=>{
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  })
  it(`Should square two a number`, ()=>{
    let squareRes = utils.square(2);
    expect(squareRes).toBe(4).toBeA('number');
  });

  it('Should includes first and last name.', ()=>{
    let user = {name:'William Myers', age: 30, city: 'Oakland'}
    let newUser = utils.setName(user, 'William Myers');
    expect(user).toInclude({firstName: 'William'}).toBeA('object');
    expect(user).toInclude({lastName: 'Myers'}).toBeA('object');
  })
});


it('Should expect some values.', ()=>{
  // expect(12).toNotBe(12);
  // expect({name: 'William'}).toEqual({name: 'William'});
  // expect([1,2,3]).toInclude(2);
  expect({
    name:'WIlliam',
    age:30,
    location:'sf'
  }).toInclude({
    age:30
  });
});
