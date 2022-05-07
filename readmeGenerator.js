function readmeGenerator(response) {
    var content = `# ${response.title}
##### [${response.userName}](${response.GitHub}) [Email Me](${response.email})
#### ${response.license}
    
## Table of Contents
* [Repository Description](#Repository-Description)
* [Installation Instructions](#Installation)
* [Usage Information](#Use)
* [References](#Ref)

    
# Repository Description
###### [Back to Table of Contents](#Table-of-Contents)
${response.description}

### Contribution Guidelines
###### [Back to Table of Contents](#Table-of-Contents)
${response.contribution}
    
## License
${response.license}`
    return content;
};

module.exports = readmeGenerator;
