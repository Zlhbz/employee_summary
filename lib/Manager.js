const Employee = require("../lib/Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        console.log("from Manager " + this.constructor.name)
        return this.constructor.name;
    }

    getOfficeNumber() {
        console.log("from Manager " + this.officeNumber)
        return this.officeNumber;
    }
}
const test = new Manager("fatma", 2, "fatma@gmail.com", 35647);
test.getName();
test.getId();
test.getRole();
test.getOfficeNumber();

module.exports = Manager;