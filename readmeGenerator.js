function readmeGenerator(response) {
    var content = `# ${response.title}
    ##### [${response.userName}][Email Me](${response.email})
    #### ${response.license}
    
    ## Table of Contents
    * [Repository Description](#Repository-Description)
    * [Installation Instructions](#Install)
    * [Usage Information](#Use)
    
    # Repository Description
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.description}
    
    ## Installation Instructions
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.use}

    ## Contribution Guidelines
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.contribution}

    ## License
    ${response.license}`
    return content;
};

module.exports = readmeGenerator;