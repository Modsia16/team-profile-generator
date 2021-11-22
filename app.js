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


const tempEngineer = new Engineer;
const tempIntern = new Intern;
const team = [];

function initialQuestions(){
    const tempManager = new Manager;
    inquirer
        .prompt(tempManager.questions)
        .then((answers) => {
                const { name, id, email, officeNumber, employeeType } = answers;
                teamManager = new Manager(name, id, email, officeNumber);
                team.push(teamManager);
                console.log(team);
                createTeamMembers(employeeType);
            });
    
}
initialQuestions();

function createTeamMembers(employeeType){

    switch(employeeType){
        case "engineer":
            inquirer
            .prompt(tempEngineer.questions)
            .then(answers => {
                const {name, id, email, github, employeeType} = answers;
                const newEngineer = new Engineer(name, id, email, github);
                team.push(newEngineer);
                createTeamMembers(employeeType);
            });
            break;
        case "intern":
            inquirer
            .prompt(tempIntern.questions)
            .then(answers => {
                const {name, id, email, school, employeeType} = answers;
                const newIntern = new Intern(name, id, email, school);
                team.push(newIntern);
                createTeamMembers(employeeType);
            });   
            break;
        case "my team is complete":
            createHtml();
            break;
    }
}

function createHtml(){
    const topHtmlArray = [`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">`]
    for(let i=0; i < team.length; i++){
        topHtmlArray.push(team[i].html);
    }
    const finalHtmlArray = [...topHtmlArray,
        `</body>
        </html>`]
    const finalHtml = finalHtmlArray.join("");
    fs.writeFile("./output/team.html", finalHtml, function(){
        console.log("Team file created! Check team.html folder!")
    })
}

