const inquirer = require("inquirer");
const fs = require("fs");
// const path = require("path");
// const util = require('util');
const Manager = require("./lib/Manager")
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const html = require("./html_last")

var obj = [];
var call = true;

const questions1 = [
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
]

const questions2 = [
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
]

const questions3 = [{
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
}]


const questions4 = [{
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
}]


getData();


async function getData() {
    try {
        const res_manager = await inquirer.prompt(questions1);
        // console.log(res_manager);
        const manager = new Manager(res_manager.name, res_manager.id, res_manager.email, res_manager.officeNumber);
        obj.push(manager);
        // console.log(obj);

        do {
            const res_choice = await inquirer.prompt(questions2);
            // console.log(res_choice);
            if (res_choice.title === "Engineer") {
                const res_engineer = await inquirer.prompt(questions3);
                const engineer = new Engineer(res_engineer.name, res_engineer.id, res_engineer.email, res_engineer.github);
                obj.push(engineer);
                // console.log(obj);


            } else if (res_choice.title === "Intern") {
                const res_intern = await inquirer.prompt(questions4);
                const intern = new Intern(res_intern.name, res_intern.id, res_intern.email, res_intern.school);
                obj.push(intern);
                // console.log(obj);
            } else {
                call = false;
            }

        } while (call === true)
        var html_final = html.generateHTML(obj);
        fs.writeFile('./output/team.html', html_final, (error) => { console.log(error) });
        return;
    } catch (error) {
        console.error(error);
    }
}
