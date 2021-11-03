//When I select the intern option then I am prompted to enter the intern’s name, ID, email, and school
//addl to team manager’s name, employee ID, email address, and office number
const Employee = require("./Employee");
class Intern extends Employee {
    //employee constructor
    constructor(name, id, email, school) {
        //add super class properties
        super(name, id, email, school);
        this.school = school;
        this.role = "intern";
        this.addlQuestions = [...this.mainQuestions,
            {
                type: "input",
                message: "What is the name of you school?",
                name: "school"
            },
            {
                type: "list",
                message: "What title is the employee you are adding?",
                choices: ["Intern", "Intern", "My team is complete"],
                name: "role"
            },
        ];
        //build html area for an intern
        this.html = "";
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