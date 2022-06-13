//Function that return the license badge
function renderLicenseBadge(license) {
  let licenseBadge = "";
  
  //Check the license that was inputted by the user 
  if (license === "Apache 2.0") {

    //Apache license badge
    licenseBadge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";

  } else if (license === "Eclipse") {

    //Eclipse license badge
    licenseBadge = "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";

  } else if (license === "IBM") {

    //IBM license badge
    licenseBadge = "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)";

  } else if (license === "ISC") {

    //RISC license badge
    licenseBadge = "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";

  } else if (license === "MIT") {

    //MIT license badge
    licenseBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";

  } else if (license === "Mozilla") {

    //Mozilla license badge
    licenseBadge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";

  } else if (license === "None") {

    //Return empty string if none is chosen
    licenseBadge = "";
  }

  //Return the license badge based on user inpput
  return licenseBadge;
}

//Function that return the license link
function renderLicenseLink(license) {
  let licenseLink = "";

  //Check the license that was inputted by the user 
  if (license === "Apache 2.0") {

    //Return the Apache license badge
    licenseLink = "https://opensource.org/licenses/Apache-2.0";

  } else if (license === "Eclipse") {

    //Return the Eclipse license badge
    licenseLink = "https://opensource.org/licenses/EPL-1.0";

  } else if (license === "IBM") {

    //Return the IBM license badge
    licenseLink = "https://opensource.org/licenses/IPL-1.0";

  } else if (license === "ISC") {

    //Return the ISC license badge
    licenseLink = "https://opensource.org/licenses/ISC";

  } else if (license === "MIT") {

    //Return the MIT license badge
    licenseLink = "https://opensource.org/licenses/MIT";

  } else if (license === "Mozilla") {

    //Return the Mozilla license badge
    licenseLink = "https://opensource.org/licenses/MPL-2.0";

  } else  if (license === "None") {

    //Return License Badge choice
    licenseLink = "";
  }

  //Return the license link based on user input
  return licenseLink;
}

//Function that return the license section of a README File
function renderLicenseSection(license) {
  let licenseSection = "";

  console.log(license);

  //Check to 
  if (license === "None") {

    licenseSection = "";

  } else {
     
    licenseSection = `[${renderLicenseBadge(license)}](${renderLicenseLink(license)})`;
  }

  return licenseSection;
}

//Function to create the lmarkdown of a README File
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributor](#contributing)
- [Test](#tests)
- [Questions](#questions)

## Description 
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License 
This application is licenses under the ${data.license} license

## Contributing
${data.contributor}

## Tests
${data.test}

## Questions
If you have any questions or concerns, email me at ${data.email}

If you want to view my profile on GitHub, go to [${data.username}](https://github.com/${data.username})
`;
}

//Export the generateMarkdown function
module.exports = generateMarkdown;
