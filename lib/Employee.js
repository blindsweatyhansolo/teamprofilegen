// parent class to be used for all employee members
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
};

module.exports = Employee;