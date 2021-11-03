//addl to team manager’s name, employee ID, email address, and office number
const Employee = require("./Employee");
class Manager extends Employee {
    //employee constructor
    constructor(name, id, email, officeNumber) {
        //add super class properties
        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;
        this.role = "manager";
        this.addlQuestions = [...this.mainQuestions,
            {
                type: "input",
                message: "What is your assigned office number?",
                name: "Name"
            },
            {
                type: "list",
                message: "What title is the employee you are adding?",
                choices: ["Manager", "Intern", "My team is complete"],
                name: "role"
            },
        ];
        //build html area for a manager
        this.html = "";
    }
    //get requested info from questions
    getGithub() {
        return this.officeNumber;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Manager;