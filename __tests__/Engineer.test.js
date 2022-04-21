// require data from Engineer.js
const Engineer = require('../lib/Engineer.js');

// test inheritance from Employee class
test('inherits base values from Employee class', () => {
    const engineer = new Engineer("Joe", 2, "joe@gmail.com");

    expect(engineer.name).toBe("Joe");
    expect(engineer.id).toBe(2);
    expect(engineer.email).toBe("joe@gmail.com");
});

// test for getting github account name value using getGithub()
test('gets github account name', () => {
    const engineer = new Engineer("Joe", 2, "joe@gmail.com", "joeHub");

    expect(engineer.getGithub()).toBe("joeHub");
});