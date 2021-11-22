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
        this.questions = [...this.primaryQuestions, 
            {
              type: "input",
              message: "What school does this intern attend?",
              name: "school"
          },
          {
            type: "list",
            message: "What title is the employee you are adding?",
            choices: ["engineer", "intern", "my team is complete"],
            name: "employeeType"
        }
    ];
          this.html = `
          <div class = "card">
              <div class = "header">
                  <div class = "name">${this.name}</div>
                  <div class = "title">${this.role}</div>
              </div>
              <div>ID: ${this.id}</div>
              <div>Email: ${this.email}</div>
              <div>School: ${this.school}</div>
          </div>`
        }
        //build html area for intern
        getSchool(){
            return this.school
        }
        //get requested info from questions
        getRole(){
            this.role = "intern";
            return this.role;
        }
      }
      
      module.exports = Intern;