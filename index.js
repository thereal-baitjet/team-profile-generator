const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");

const employees = [];

function initiate() {
    makeHtml();
    addTeamMember()
}

function addTeamMember() {
    inquirer.prompt([{
        message: "Whats your employees' name?",
        name: "name"
    },
    {
        type: "list",
        message: "whats your employees' role?",
        choices: [
            "Engineer",
            "Intern",
            "Manager",
        ],
        name: "role",
    },
    {
        messae: "whats your employees' id",
        name: "id",
    },
    {
        message: "whats your employees' email address",
        name: "email"
    }])

        .then(function ({ name, role, id, email }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub usernamne";
            } else if (role == "Intern") {
                roleInfo = "school name";
            } else if (role === "Manager") {
                roleInfo = "office number";
            }
            inquirer.prompt([{
                message: `whats your employees' ${roleInfo}`,
                name: "roleInfo"
            },
            {
                type: "list",
                message: "Would you like to add more team members?",
                choices: [
                    "yes",
                    "no",
                ],
                name: "moreMembers"
            }])
                .then(function ({ roleInfo, moreMembers }) {
                    let newMember;
                    if (role === "Engineer") {
                        newMember = new Engineer(name, id, email, roleInfo);
                    } else if (role === "Intern") {
                        newMember = new Intern(name, id, email, roleInfo);
                    } else if (role === "Manager") {
                        newMember = new Manager(name, id, email, roleInfo);
                    }
                    employees.push(newMember);
                    addHtml(newMember)
                        .then(function () {
                            if (moreMembers === "yes") {
                                addTeamMember();
                            } else {
                                finishHtml();
                            }
                        });

                });
        });
}
function makeHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body style="background: lightblue;">
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./team.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHtml(member) {
    return new Promise(function (resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-item">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${gitHub}" target="_blank">${gitHub}</a><li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-item">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officeNumber = member.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
                <ul class="list-group list-group-item">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Office Number: ${officeNumber}</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    
    </body>
    </html>`
        }
        console.log("team created");
        fs.appendFile("./team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}
function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./teammembers.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

initiate();