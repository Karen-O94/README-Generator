//This functionreturns a license badge based on which license is passed in
// If there is no license, it return an empty string
function renderLicenseBadge(license) {
  if (license) {
    switch (license) {
      case 'MIT License':
        return '[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)';
      case 'GPLv3 License':
        return '[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)';
      case 'Apache 2.0 License':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'Mozilla Public License 2.0':
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      default:
        "";
        break;
    }
  }
}

// This function that returns the license link based on the user's input and returns an empty string if user chooses Other

function renderLicenseLink(license) {
  if (license) {
    switch (license) {
      case 'MIT License':
        return '\n\n> This project was created under the standard MIT licence.\n\n[Learn more about this licence.](https://lbesson.mit-license.org/)';
      case 'GPLv3 License':
        return '\n\n> This project was created under the GNU General Public License.\n\n[Learn more about this licence.](http://www.gnu.org/licenses/gpl-3.0.en.html)';
      case 'Apache 2.0 License':
        return '\n\n> This project was created under the Apache License, Version 2.0.\n\n[Learn more about this licence.](https://www.apache.org/licenses/LICENSE-2.0)';
      case 'Mozilla Public License 2.0':
        return '\n\n> This project was created under the Mozilla Public License, Version 2.0.\n\n[Learn more about this licence.](https://www.mozilla.org/en-US/MPL/2.0/)';
      default:
        "";
        break;
    }
  }
};

//This function that returns the license section of README if user chooses a License type.
//Otherwise, it returns an empty string if 'Other' is selected

function renderLicenseSection(license) {
  if (license !== "Other") {
    let licenseType = "## License\n\n" + renderLicenseBadge(license) + renderLicenseLink(license);
    return licenseType;
  }
  else {
    "";
  }
};

//This is creates a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseSection(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributions](#Contributions)
  * [Testing](#Testing)
  * [Credits](#Credits)
  * [License](#License)
  * [Questions](#Questions?)


  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributions

  ${data.contributing}

  ## Testing

  ${data.test}

  ## Credits
  ${data.credits}

  ## Questions?

  Please contact me on the links below if you have any queries on how the application works or to view my other projects:

  My GitHub username is ${data.github} 

  Link to GitHub Profile: ${data.email}

  Email:  ${data.email}
`;
}

module.exports = generateMarkdown;
