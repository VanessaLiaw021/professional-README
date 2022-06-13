//Package for writing to the file system
const fs = require("fs");

//For prompting user input
const inquirer = require("inquirer");

//Linking the page for where the README is being developed
const generateMarkdown = require("./utils/generateMarkdown");

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

//Function to write README file
function writeToFile(fileName, data) {

    //WRite file will generated the README File 
    fs.writeFile(fileName, data, err => {

        //If error exist, display the error 
        if (err) return console.log(err);

        //Display message if it is generateing the user README based on user inputs 
        console.log("It's time to preview your generated README.md file.");
    });
}

//Function to initialize app
function init() {
    
    //Prompt user with question, call the writeToFile() to create the README.md file and get data from genereateMarkdown 
    inquirer.prompt(questions).then(response => writeToFile("./sample/README.md", generateMarkdown(response)));
}

//Call the initialize function
init();