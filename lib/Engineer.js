const Employee = require("../lib/Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        console.log("from Engineer " + this.github)
        return this.github;

    }

    getRole() {
        console.log("from Engineer " + this.constructor.name)
        return this.constructor.name;
    }

}

const test = new Engineer("mustafa", 3, "mustafa@gmail", "mstf")
test.getName();
test.getId();
test.getEmail();
test.getGithub();
test.getRole();


module.exports = Engineer;