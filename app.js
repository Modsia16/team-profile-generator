//Given a command-line application that accepts user input, when 
//I am prompted for my team members and their information, 
//then an HTML file is generated that displays a nicely formatted team roster based on user input.

const inquirer = require('inquirer');
//for html 
const fs = require('fs');
//construnctors
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// initial build question prompts and promises here
//for new team members
const proEng = new Engineer;
const proInt = new Intern;
const team = [];
function empQuestions(){
    const proMgr = new Manager;
    inquirer
        .prompt(proMgr.addlQuestions)
        .then(answers => {
            const {name, id, email, officeNumber, role} = answers;
            teamManager = new Manager(name, id, email, officeNumber);
            team.push(teamManager);
            console.log(team);
            createTeamMembers(role);
        });
    
}
empQuestions();

function createTeamMembers(role){
//switch for role overload
    switch(role){
        case "engineer":
            inquirer
            .prompt(proEng.addlQuestions)
            .then(answers => {
                const {name, id, email, github, role} = answers;
                const newEngineer = new Engineer(name, id, email, github);
                team.push(newEngineer);
                createTeamMembers(role);
            });
            break;
        case "intern":
            inquirer
            .prompt(proInt.addlQuestions)
            .then(answers => {
                const {name, id, email, school, role} = answers;
                const newIntern = new Intern(name, id, email, school);
                team.push(newIntern);
                createTeamMembers(role);
            });   
            break;
        case "My team is complete":
            createHtml();
            break;
    }
}

//html build here


