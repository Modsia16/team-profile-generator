//addl to team manager’s name, employee ID, email address, and office number
const Employee = require("./Employee");
class Manager extends Employee {
    //employee constructor
    constructor(name, id, email, officeNumber) {
        //add super class properties
        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;
        this.role = "Manager";
        this.addlQuestions = [...this.mainQuestions,
            {
                type: "input",
                message: "What is your assigned office number?",
                name: "officeNumber"
            },
            {
                type: "list",
                message: "What title is the employee you are adding?",
                choices: ["engineer", "intern", "my team is complete"],
                name: "role"
            }
        ];
        //build html area for a manager
        this.html = `        
        <div class="card">
        <div class="card-header">
            <h5 class="name">${this.name}</h5>
            <h6 class="role">${this.role}</h6>
        </div>
        <div class="card-body">
            <div class="id">Id: ${this.id}</div>
            <div class="email">Email: ${this.email}</div>
            <div class="officeNumber">Office Number: ${this.officeNumber}</div>
        </div>
    </div>`
};
    //get requested info from questions
    getGithub() {
        return this.officeNumber;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Manager;