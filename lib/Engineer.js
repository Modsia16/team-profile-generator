//When I select the engineer option then I am prompted to enter the engineer’s name, ID, email, and GitHub username
const Employee = require("./Employee");
class Engineer extends Employee {
    //employee constructor
    constructor(name, id, email, github) {
        //add super class properties
        super(name, id, email, github);
        this.github = github;
        this.role = "engineer";
        this.addlQuestions = [...this.mainQuestions,
            {
                type: "input",
                message: "Enter github user name?",
                name: "github"
            },
            {
                type: "list",
                message: "What title is the employee you are adding?",
                choices: ["Engineer", "Intern", "My team is complete"],
                name: "role"
            },
        ];
        //build html area for engineer
        this.html = "";
    }
    //get requested info from questions
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;