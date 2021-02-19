// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ()=>
    inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is is the title of your project?',
        validate: (value)=>{if (value) {return value} else { return "I need a value to continue"}},
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe what your application does?',
        validate: (value)=>{if (value) {return value} else { return "I need a value to continue"}},
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What motivated to build this app?',
        validate: (value)=>{if (value) {return value} else { return "I need a value to continue"}},
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this app?',
        validate: (value)=>{if (value) {return value} else { return "I need a value to continue"}},
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Enter a url or folder path to add screenshots of your project',
        validate: (value)=>{if (value) {return value} else { return "I need a value to continue"}},
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter a link to your deployed application',
        validate: (value)=>{if (value) {return value} else { return "I need a value to continue"}},
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this?',
        validate: (value)=>{if (value) {return value} else { return "I need a value to continue"}}
    },
    {
        type: 'input',
        name: 'technology',
        message: 'What technology was this project built with?',
        validate: (value)=>{if (value) {return value} else { return "I need a value to continue"}}
    },
    {
        type: 'input',
        name: 'thoughts',
        message: 'What were the successes/challenges of this project?',
        validate: (value)=>{if (value) {return value} else { return "I need a value to continue"}}
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Add the creditors of this project',
        validate: (value)=>{if (value) {return value} else { return "I need a value to continue"}}
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license was used for this project?',
        validate: (value)=>{if (value) {return value} else { return "I need a value to continue"}},
    },
    ]);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
