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



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README