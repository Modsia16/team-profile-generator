//When I select the engineer option then I am prompted to enter the engineer’s name, ID, email, and GitHub username
const Employee = require("./Employee");
class Engineer extends Employee {
    //employee constructor
    constructor(name, id, email, github) {
        //add super class properties
        super(name, id, email, github);
        this.github = github;
        this.role = "engineer";
        this.questions = [...this.primaryQuestions, 
            {
                type: "input",
                message: "Enter github user name?",
                name: "github"
            },
            {
                type: "list",
                message: "What title is the employee you are adding?",
                choices: ["engineer", "intern", "my team is complete"],
                name: "employeeType"
            }
        ];
        //build html area for engineer

        this.html = `
        <div class = "card">
        <div class = "header">
            <div class = "name">${this.name}</div>
            <div class = "title">${this.role}</div>
        </div>
        <div>ID: ${this.id}</div>
        <div>Email: ${this.email}</div>
        <div>Office Number: ${this.officeNumber}</div>
    </div>`
  }  
    //get requested info from questions
    getGithub() {
        return this.github;
    }
    getRole() {
        this.role = "Engineer";
        return this.role;
    }
}

module.exports = Engineer;