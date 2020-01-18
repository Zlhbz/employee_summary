const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager.js")
const Employee = require("./lib/Employee.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer");


inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of the manager?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the id of the manager?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the email of the manager?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the office number of the manager?",
            name: "officeNumber"
        }
    ])
    .then(function (res) {
        const manager = new Manager(res.name, res.id, res.email, res.officeNumber);
        console.log(manager)
        // return manager;
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "Which employee do you want to add, engineer or intern?",
                    name: "title",
                    choices: [
                        "Engineer",
                        "Intern",
                        "None to add"
                    ]
                }
            ])
            .then(function (res) {
                console.log(res);
                if (res.title === "Engineer") {
                    inquirer
                        .prompt([{
                            type: "input",
                            message: "What is the name of the engineer?",
                            name: "name",
                        },
                        {
                            type: "input",
                            message: "What is id of the engineer?",
                            name: "id"
                        },
                        {
                            type: "input",
                            message: "What is the email of the engineer?",
                            name: "email"
                        },
                        {
                            type: "input",
                            message: "What is the GitHub user name of the engineer?",
                            name: "github"
                        }]).then(function (res) {
                            const engineer = new Engineer(res.name, res.id, res.email, res.github);
                            console.log(engineer);
                            return engineer;
                        })
                } if (res.title === "Intern") {
                    inquirer
                        .prompt([{
                            type: "input",
                            message: "What is the name of the intern?",
                            name: "name",
                        },
                        {
                            type: "input",
                            message: "What is id of the intern?",
                            name: "id"
                        },
                        {
                            type: "input",
                            message: "What is the email of the intern?",
                            name: "email"
                        },
                        {
                            type: "input",
                            message: "What is the school he/she/they graduated from?",
                            name: "school"
                        }]).then(function (res) {
                            const intern = new Intern(res.name, res.id, res.email, res.school);
                            console.log(intern);
                            return intern;
                        })

                } else {
                    return;
                }
            });
    });





