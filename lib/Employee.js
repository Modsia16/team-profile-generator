//everyyone is an employee
class Employee {
    //employee constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
        this.primaryQuestions = [
            {
                type: "input",
                message: "name?",
                name: "name",
            },
            {
                type: "input",
                message: "id?",
                name: "id",
            },
            {
                type: "input",
                message: "email?",
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