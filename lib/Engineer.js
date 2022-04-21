// import parent Employee class
const Employee = require('./Employee.js');

// Engineer class inherits Employee class (keyword: extends)
class Engineer extends Employee {
    // constructer function for Engineer specific data
    constructor(name, id, email, github) {
        // call parent class super constructor
        super(name, id, email);

        // github value
        this.github = github;
    };

    // get github value
    getGithub() {
        return this.github;
    };

    // overrides 'Employee' from getRole() in parent class
    getRole() {
        return 'Engineer';
    };
};

// export module for use in testing and content creation
module.exports = Engineer;