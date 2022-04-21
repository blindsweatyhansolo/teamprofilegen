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

// test for getting employee name using getName()
test('gets name from Employee', () => {
    const employee = new Employee('Jack', 1, 'jack@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

// test for getting employee ID using getID()
test('gets Employee ID number', () => {
    const employee = new Employee('Jack', 1, 'jack@gmail.com');

    expect(employee.getID()).toEqual(expect.any(Number));
});

test('gets Employee email address', () => {
    const employee = new Employee('Jack', 1, 'jack@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});