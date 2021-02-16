// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const { cpuUsage } = require("process");

// const generateMarkdown = require("./utils/generateMarkdown")
// const renderLicenseBadge = require("./utils/generateMarkdown")
// const renderLicenseLink = require("./utils/generateMarkdown")
// const renderLicenseSection = require("./utils/generateMarkdown")


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
// //                pathing to certain file.  cwd is current working directory, so we're pathing into our cwd.  fileName is what we pass into the function as well as the data
//     fs.writeFileSync(path.join(process.cwd(), fileName),data, (err) =>
//     err ? console.error(err) : console.log("success!")
//     )
// }
// const rendLiceBadge = renderLicenseBadge(data.license)

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    if (license !== "None") {
      return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.png)`
    } 
    return ""
  
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license !== "None") {
      return `\n* [License](#license)\n`
  
    }
      return ""
  }
  
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== "None") {
      return `## License
  
      ${license}`
  
    }
      return ""
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
        {
            type: "input",
            name: "installation",
            message: "What command should be run to install dependencies?"
        },
        {
            type: "input",
            name: "test",
            message: "What command should be run to run test?"
        },
        {
            type: "input",
            name: "usage",
            message: "What does the user need to know about the repo?"
        },
        {
            type: "input",
            name: "contributing",
            message: "What does the user need to know about conrtributing to the repo?"
        },
        {
            type: "input",
            name: "developer",
            message: "Who is the creator of this repository?"
        },
        //data is all of the answers from above responses
    ]).then ((data) => {
        // writeToFile("README.md", generateMarkdown(data))
        const readMe = `# ${data.title}

        ${renderLicenseBadge(data.license)}
        
        ## Description
        
        ${data.description}

        ## Table of Contents
        
        * [Installation](#installation)
        
        * [Usage](#usage)
        
        * ${renderLicenseLink(data.license)}
        
        * [Contributing](#contributing)
         
        * [Test](#tests)
        
        * [Questions](#questions)
        
        * [Contact](#contact)
        
        ## Installation
        
        To install necessary dependencies, run the following command:
        
        
        ${data.installation}
        
        
        ## Usage
        
        ${data.usage}
        
        ${renderLicenseSection(data.license)}
        
        ## Contributing
        
        ${data.contributing}
        
        ## Tests
        
        ${data.tests}
        
        ## Questions
        
        ${data.questions}
      `;
      fs.writeFileSync("README.md",readMe, (err) =>
      err ? console.error(err) : console.log("success!")
      )
    })
}

// Function call to initialize app
init()
