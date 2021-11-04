//When I select the intern option then I am prompted to enter the intern’s name, ID, email, and school
//addl to team manager’s name, employee ID, email address, and office number
const Employee = require("./Employee");
class Intern extends Employee {
    //employee constructor
    constructor(name, id, email, school) {
        //add super class properties
        super(name, id, email, school);
        this.school = school;
        this.role = "Intern";
        this.addlQuestions = [...this.mainQuestions,
            {
                type: "input",
                message: "What is the name of you school?",
                name: "school"
            },
            {
                type: "list",
                message: "What title is the employee you are adding?",
                choices: ["engineer", "intern", "my team is complete"],
                name: "role"
            }
        ];
        //build html area for an intern
        this.html = `
        <div class="card">
            <div class="card-header">
                <div class="name">Name: ${this.name}</div>
                <div class="id">Id: ${this.id}</div>
                <div class="role">Role: ${this.role}</div>
            </div>
            <div class="card-body">
                
                <div class="email">Email: ${this.email}</div>
                <div class="id">School: ${this.school}</div>
            </div>
        </div>`;       
    }
    //get requested info from questions
    getGithub() {
        return this.school;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Intern;