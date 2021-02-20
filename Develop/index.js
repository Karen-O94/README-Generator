// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['What is is the title of your project?',
'Please describe what your application does',
 'How do you install this app?',
 'How is this app used?', 
 'What license did you use?',
 'What are the contribution guidelines for this project?'
 ,'How do you test your app?', 
 'What is your github username?', 
 'Enter your the url for your Github profile',
 'Enter your email address',
'Who are the creditors of this project']


// This function writes the README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Successfully wrote to README.md!'));
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],  
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3], 
        },
        {
            type: 'list',
            name: 'license',
            message: questions[4],
            choices: ['MIT License', 'GPLv3 License', 'Apache 2.0 License','Mozilla Public License 2.0', 'Other']
        },
        {
            type: 'input',
            name: 'contributing',
            message: questions[5],
          },
        {
            type: 'input',
            name: 'test',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'github',
            message:questions[7],
        },
        {
            type: 'input',
            name: 'gitURL',
            message: questions[8],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[9],
        },
        {
            type: 'input',
            name: 'credits',
            message: questions[10],
        },
        ]).then((data) =>
        writeToFile("README.md", data)
        )
};

// Function call to initialize app
init();

