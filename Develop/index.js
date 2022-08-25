const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is the name of this application',
        name: 'app'
    },
    {
        type: 'input',
        message: 'Please write a detailed description of the application:',
        name: 'descr'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use:',
        name: 'instruct'
    },
    {
        type: 'input',
        message: 'For the Credits please list any collaborators(with GitHub profiles), third-party assets and/or tutorials:',
        name: 'credits'
    },
    {
        type: 'checkbox',
        message: 'If a license was used please select it from the following:',
        choices: ["Apache", "MIT", "Mozilla"],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'gitHub'
    },
    {
        type: 'input',
        message: 'Enter your email:',
        name: 'email'
    },
])
    .then((response) => {
        console.log(response)
        const readDoc = generateMarkdown(response)
        if (!response.app || !response.descr || !response.install || !response.instruct || !response.credits || !response.license || !response.gitHub || !response.email) {
            console.log("You missed some fields, please start over")
            return;
        }
        fs.appendFile("readme.md", readDoc, (err) => err ? console.log("You missed some fields, please start over") : console.log("README.md created!"))
})



