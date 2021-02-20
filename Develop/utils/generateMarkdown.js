// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  if (license) {
    switch (license) {
      case 'MIT License':
        badge = '[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)';
        break;
      case 'GPLv3 License':
        badge = '[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)';
        break;
      case 'Apache 2.0 License':
        badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
      case 'Mozilla Public License 2.0':
        badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        break;
    }
    return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  # Description
  ${data.description}

  #Table of Contents
  1.[Installation](##Installation)
  2.[Usage](#Usage)
  3.[Contributions](#Contributions)
  4.[Testing](#Testing)
  5.[Credits](#Credits)
  6.[License](#License)


  #Installation
  ${data.installation}

  #Usage
  ${data.usage}

  #Contributions
  ${data.contributions}

  #Testing
  ${data.test}

  #Credits
  ${data.credits}
`;
}

module.exports = generateMarkdown;
