// require data from Intern.js
const Intern = require('../lib/Intern.js');

// test inheritance from Employee class
test('inherits base values from Employee class', () => {
    const intern = new Intern("Sally", 3, "sally@gmail.com", "MIT");

    expect(intern.name).toEqual("Sally");
    expect(intern.id).toEqual(3);
    expect(intern.email).toEqual("sally@gmail.com");
});

// test for getting school name value using getSchool()
test('get Intern school name', () => {
    const intern = new Intern("Sally", 3, "sally@gmail.com", "MIT");

    expect(intern.getSchool()).toEqual("MIT");
});