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
    },
    {
        type: 'input',
        name: 'aim',
        message: 'What motivated to build this project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project?',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Enter a url or folder path to add screenshots of your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this?',
    },
    {
        type: 'input',
        name: 'technology',
        message: 'What technology was this project built with?',
    },
    {
        type: 'input',
        name: 'success',
        message: 'What were the successes of this project?',
    },
    {
        type: 'input',
        name: 'difficulty',
        message: 'What were the difficulties of this project?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Add the creditors of this project',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license was used for this project?',
    },
    ]);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
