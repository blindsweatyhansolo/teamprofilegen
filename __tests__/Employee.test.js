// require data from Employee.js
const Employee = require('../lib/Employee.js');

// test for creating Employee object
test('creates Employee object', () => {
    // new Employee should have name, ID number, and email
    const employee = new Employee('Jack', 1, 'jack@gmail.com');

    expect(employee.name).toEqual('Jack');
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual('jack@gmail.com');
});