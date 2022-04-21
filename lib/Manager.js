// import parent Employee class
const Employee = require('./Employee.js');

// Manager class inherits Employee class (keyword: extends)
class Manager extends Employee {
    // constructor function for Manager specific data
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        // office number data
        this.officeNumber = officeNumber;
    };

    getOfficeNum() {
        return this.officeNumber;
    };
};

module.exports = Manager;