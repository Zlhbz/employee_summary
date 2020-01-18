const Employee = require("../lib/Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        console.log("from Intern " + this.school)
        return this.school;
    }

    getRole() {
        console.log("from Intern " + this.constructor.name)
        return this.constructor.name;
    }


}
// const test = new Intern("oguz", 4, "oguz@gmail.com", "robertcollege");
// test.getName();
// test.getId();
// test.getSchool();
// test.getRole();


module.exports = Intern;