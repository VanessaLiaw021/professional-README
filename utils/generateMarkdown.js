//Function that return the license badge
function renderLicenseBadge(license) {
  const licenseBadgeChoice = "";
  
  //Check the license that was inputted by the user 
  if (license === "Apache 2.0") {

    //Return the Apache license badge
    licenseBadgeChoice = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";

  } else if (license === "Eclipse") {

    //Return the Eclipse license badge
    licenseBadgeChoice = "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";

  } else if (license === "IBM") {

    //Return the IBM license badge
    licenseBadgeChoice = "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)";

  } else if (license === "ISC") {

    //Return the ISC license badge
    licenseBadgeChoice = "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";

  } else if (license === "MIT") {

    //Return the MIT license badge
    licenseBadgeChoice = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";

  } else if (license === "Mozilla") {

    //Return the Mozilla license badge
    licenseBadgeChoice = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";

  } else {

    //Return License Badge choice
    return licenseBadgeChoice;
  }
}

//Function that return the license link
function renderLicenseLink(license) {
  const licenseLink = "";

}

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
