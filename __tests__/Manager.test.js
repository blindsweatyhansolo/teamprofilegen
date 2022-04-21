// require data from Manager.js
const Manager = require('../lib/Manager.js');

// test inheritance from Employee class
test('inherits base values from Employee class', () => {
    const manager = new Manager("Jack", 1, "jack@gmail.com");

    expect(manager.name).toBe(manager.name);
    expect(manager.id).toBe(manager.id);
    expect(manager.email).toBe(manager.email);
});