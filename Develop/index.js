// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")

const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = []


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
//                pathing to certain file.  cwd is current working directory, so we're pathing into our cwd.  fileName is what we pass into the function as well as the data
    fs.writeFileSync(path.join(process.cwd(), fileName),data)

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "githubname",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "title",
            message: "What is the project’s title?"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project:"
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        //data is all of the answers from above responses
    ]).then (data => {
        writeToFile("README.md", generateMarkdown(data))

    })
}

// Function call to initialize app
init()

