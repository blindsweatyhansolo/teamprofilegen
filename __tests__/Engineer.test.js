// require data from Engineer.js
const Engineer = require('../lib/Engineer.js');

// test inheritance from Employee class
test('inherits base values from Employee class', () => {
    const engineer = new Engineer("Joe", 2, "joe@gmail.com");

    expect(engineer.name).toEqual("Joe");
    expect(engineer.id).toEqual(2);
    expect(engineer.email).toEqual("joe@gmail.com");
});

// test for getting github account name value using getGithub()
test('gets github account name', () => {
    const engineer = new Engineer("Joe", 2, "joe@gmail.com", "joeHub");

    expect(engineer.getGithub()).toEqual("joeHub");
});

// test if getRole() overrides from 'Employee' to 'Engineer'
test('get role of Engineer, not Employee', () => {
    const engineer = new Engineer("Joe", 2, "joe@gmail.com", "joeHub");

    expect(engineer.getRole()).toEqual("Engineer");
});