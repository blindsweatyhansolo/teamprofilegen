// import parent Employee class
const Employee = require('./Employee.js');

// Manager class inherits Employee class (keyword: extends)
class Manager extends Employee {
    // constructor function for Manager specific data
    constructor(name, id, email, officeNumber) {
        // call parent class super constructor
        super(name, id, email);

        // office number value
        this.officeNumber = officeNumber;
    };

    // get officeNumber value
    getOfficeNum() {
        return this.officeNumber;
    };

    // overrides 'Employee' from getRole() in parent class
    getRole() {
        return 'Manager';
    }
};

// export module for use in testing and content creation
module.exports = Manager;