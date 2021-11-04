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
                choices: ["engineer", "intern", "my team is complete"],
                name: "role"
            }
        ];
        //build html area for engineer
        this.html = `
        <div class="card">
            <div class="card-header">
                <div class="name">Name: ${this.name}</div>
                <div class="id">Id: ${this.id}</div>      
            </div>
            <div class="card-body">
                <div class="email">Email: ${this.email}</div>
                <div class="role">Role: ${this.role}</div>
                <div class="github">github link: <a href:"https://www.github.com/${this.github}"</div>
            </div>
        </div>`;
    }
    //get requested info from questions
    getGithub() {
        return this.github;
    }
    getRole() {
        this.role = "engineer";
        return this.role;
    }
}

module.exports = Engineer;