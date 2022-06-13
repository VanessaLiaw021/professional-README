//Function that return the license badge
function renderLicenseBadge(license) {}

//Function that return the license link
function renderLicenseLink(license) {}

//Function that return the license section of a README File
function renderLicenseSection(license) {}

//Function to create the lmarkdown of a README File
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributor](#contributing)
- [Test](#test)
- [Questions](#questions)

## Description 
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License 
${data.license}

## Contributing
${data.contributor}

## Test
${data.test}

## Questions
If you have any questions or concerns, email me at ${data.email}

If you want to view my profile on GitHub, go to [${data.username}](https://github.com/${data.username})
`;
}

//Export the generateMarkdown function
module.exports = generateMarkdown;
