const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

const employees = [];

function iniate() {
    MakeHtml();
    addTeamMemeber()
}

funtion addTeamMemeber() {
    inquirer.prpomt([{
        message: "Whats your employees' name?",
        name: "name"
    },
    {
        type: "list",
        message: "whats your employees role?",
        choices: [
            "Engineer",
            "Intern",
            "Manager",
        ],
        name: "role",
    },
    {
        messae: "whats your employees id",
        name: "id",
    },
    {   message: "whats your employees emaiul adress",
        name: "email"
    }])
    .then(function({name, role, id , email}){
        let roleInfo = "";
        if (role === "engineer") {
            roleInfo = "GitHub usernamne";
        } else if (role == "Intern") {
            reoleInfo = "schoolename";
         } else { 
             roleInfo = "office number";
        }
        inquirer.prompt({[
            message: `whats your team members'${roleInfo}`,
            name: "roleInfo"
        ]})