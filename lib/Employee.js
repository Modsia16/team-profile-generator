//everyyone is an employee
class Employee {
    //employee constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "employee";
        this.mainQuestions = [
            {
                type: "input",
                message: "Name?",
                name: "name",
                //add a validation for name
                validate: val => /^[a-zA-Z]*$/.test(val)
            },
            {
                type: "input",
                message: "Id?",
                name: "id",
                //add a validation for id
                validate: val => /^[1-9]*$/.test(val)
            },
            {
                type: "input",
                message: "Email?",
                name: "email"
            },
        ];
        this.html = "";
    }
    //get requested info from questions
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Employee;