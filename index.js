// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

//Array of questions to prompt user with questions
const questions = [
    {
        //Question for title
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        //Question for description
        type: "input", 
        name: "description",
        message: "What is the description of your project?"
    },
    {
        //Question for installation
        type: "input", 
        name: "installation",
        message: "What is the installation of your project (if any)?"
    }, 
    {
        //QUestion for usage
        type: "input", 
        name: "usage",
        message: "What is the usage information of your project?"
    },
    {
        //Question for contributor
        type: "input", 
        name: "contributor",
        message: "Who are the contributors to your project?"
    },
    {
        //Question for test
        type: "input", 
        name: "test",
        message: "What are the test instruction for your project?"
    },
    {
        //Question for license
        type: "list",
        name: "license",
        message: "What is the license of your project (if any)?",
        choices: ["Apache", "ISC", "Mozilla", "MIT", "None"]
    },
    {
        //Question for GitHub username
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        //Question for email
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
