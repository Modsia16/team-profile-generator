//addl to team manager’s name, employee ID, email address, and office number
const Employee = require("./Employee");
class Manager extends Employee {
    //employee constructor
    constructor(name, id, email, officeNumber) {
        //add super class properties
        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;
        this.role = "manager";
        this.questions = [...this.primaryQuestions, 
            {
              type: "input",
              message: "What is the office number?",
              name: "officeNumber"
          },
          {
            type: "list",
            message: "What title is the employee you are adding?",
            choices: ["engineer", "intern", "my team is complete"],
            name: "employeeType"
          }]
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
        //build html area for manager
        getOfficeNumber(){
            return this.officeNumber
        }
         //get requested info from questions
        getRole(){
            this.role = "Manager";
            return this.role;
        }
      }
      
      module.exports = Manager;