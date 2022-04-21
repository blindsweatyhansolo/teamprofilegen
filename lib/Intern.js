// import parent Employee class
const Employee = require('./Employee.js');

// Intern class inherits Employee class (keyword: extends)
class Intern extends Employee {
    // constructor function for Inter specific data
    constructor(name, id, email, school) {
        // call parent class super constructor
        super(name, id, email);

        // school value
        this.school = school;
    };

    // function to get school name
    getSchool() {
        return this.school;
    };

    // overrides 'Employee' from getRole() in parent class
    getRole() {
        return 'Intern';
    };
};

// export module for use in testing and content creation
module.exports = Intern;