// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (typeof license === 'string') {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)]`
  }
  if (typeof !license) {
    return `''`
  }
}
renderLicenseBadge;

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  `#License
  ${data.license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description
  ${data.description}
  # Motivation
  ${data.motivation}
  #Table of Contents
  1.[Installation](#Installation)
  2.[Usage](#Usage)
  3.[Technology](#Technology)
  4.[Screenshot](#Screenshot)
  5.[Credits](#Credits)
  6.[License](#License)
  #Installation
  ${data.installation}
  #Usage
  ${data.usage}
  #Technology
  ${data.technology}
  #Screenshot
  ${data.screenshot}
  #Link to deployed application
  ${data.link}
  #Credits
  ${data.credits}
`;
}

module.exports = generateMarkdown;
