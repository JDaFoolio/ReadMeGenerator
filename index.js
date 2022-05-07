var readmeGenerator = require("./readmeGenerator");
//node modules
var fs = require("fs");
var inquirer = require ('inquirer');

//array of questions for user
let questions = [
    {
        type: "input",
        message: "What is the name of the repository?",
        name: "title"
    },{
        type: "input",
        message: "Please provide a description of the repository?",
        name: "description"
    }, {
        type: "input",
        message: "Please describe the installation process if applicable",
        name: "installation"
    }, {
        type: "input",
        message: "Please describe the use of the project",
        name: "use"
    } , {
        type: "input",
        message: "How do you test for this project",
        name: "test"
    } , {
       type: "input",
       message: "Were there any other contributions to the project?",
       name: "contribution" 
    } , {
        type: "list",
        message: "Please select a license for your project",
        name: "license",
        choices : [
            "MIT",
            "APACHE",
            "BOOST",
            "BSD",
            "GVL-GPL",
            "N/A"
        ],
    } , {
        type: "input",
        message: "Please provide your email",
        name: "email"
    } , {
        type: "input",
        message: "Please provide your github username",
        name: "userName"
    }
];

//Function to write the readme.md file 
inquirer.prompt(questions).then(function(response) {
    console.log(response);

    var content = readmeGenerator(response);
    console.log(content);
    fs.writeFile("./ReadMe.md", content, function(err) {
        if (err) throw err
        console.log("successful");
    });
} );