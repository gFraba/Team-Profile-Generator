const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

let team = [];


const questions = {
    Manager: [
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
        }
    ],

    Engineer: [
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
        }
    ],

    Intern: [
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?",
        },
        {
            type: "input",
            name: "school",
            message: "What school is the intern attending?",
        }
    ]
}

function init() {
    // let addNewMembers = true;

    addNewMember();
};

function addNewMember() {
    inquirer.prompt(selectMemberType)
        .then(answer => {
            console.log(answer.memberType);

            if (answer.memberType === "Manager") {
                inquirer.prompt(questions.Manager)
                    .then(answer => {
                        console.log(team);

                        //save employee info
                        const manager = new Manager(
                            answer.name,
                            answer.id,
                            answer.email,
                            answer.officeNumber
                        );

                        //add info to team array
                        team.push(manager);

                    });
                } else if (answer.memberType === "Engineer") {
                    inquirer.prompt(questions.Engineer)
                        .then(answer => {
                            console.log(team);
    
                            //save ee info
                            const engineer = new Engineer(
                                answer.name,
                                answer.id,
                                answer.email,
                                answer.github
                            );
                            //add info to team array
                            team.push(engineer);
                            if (answer.addNew === "yes") {
                                addNewMember();
                            }
                        });
                }
            })
    }
    init();