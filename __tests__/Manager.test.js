// require data from Manager.js
const Manager = require('../lib/Manager.js');

// test inheritance from Employee class
test('inherits base values from Employee class', () => {
    const manager = new Manager("Jack", 1, "jack@gmail.com");

    expect(manager.name).toBe(manager.name);
    expect(manager.id).toBe(manager.id);
    expect(manager.email).toBe(manager.email);
});

// test to get office number from Manager class using getOfficeNum()
test('get Manager office number', () => {
    const manager = new Manager("Jack", 1, "jack@gmail.com", 420);

    expect(manager.getOfficeNum()).toBe(420);
});