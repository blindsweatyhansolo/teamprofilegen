// parent class to be used for all employee members
class Employee {
    // constructor function for name, id, and email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    // function to get name from employee
    getName() {
        return this.name;
    };

    // function to get ID number from employee
    getID() {
        return this.id;
    };

    
};


module.exports = Employee;