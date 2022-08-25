
const generateMarkdown = function({app, descr, install, credits, instruct, license, gitHub, email}) {
  let licensePick = `${license}`;
  let licenseLink = '';
  if (licensePick === 'Mozilla') {
    licensePick = 'MozillaPublicLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  };
  if (licensePick === 'Apache') {
    licensePick = 'ApacheLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  };
  if (licensePick === 'MIT') {
    licensePick = 'MITLicense';
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  };

return (`
# ${app}
![badge](https://img.shields.io/badge/license-${license}-brightorange)

## Description
${descr}

## Install Instructions
${install}

# Credits
${credits}

## Instructions/How to use
${instruct}

# License:
Permission to use this application is granted under the ${license} license. ${licenseLink}

## Created By:
[${gitHub}](https://github.com/${gitHub})

## If you have any further questions on this application please feel free to contact me at ${email}
  `)}


module.exports = generateMarkdown;
