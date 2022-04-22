// parent class to be used for all employee members
class Employee {
    // constructor function for name, id, and email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    // parent class functions to be inherited by subclasses //
    // function to get name from employee
    getName() {
        return this.name;
    };

    // function to get ID number from employee
    getId() {
        return this.id;
    };

    // function to get email from employee
    getEmail() {
        return this.email;
    };

    // function to get employee's role, parent class 'Employee' gets overridden in subclasses
    getRole() {
        return 'Employee';
    };
};


module.exports = Employee;