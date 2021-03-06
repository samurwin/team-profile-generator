const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/generatePage');
const { rejects } = require('assert');


// inquirer questions
const questions = [
    {
        type: 'list',
        name: 'role',
        message: "What is this employee's role?",
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter a name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email?",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter an email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID number?",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter an ID.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is this engineer's github username?",
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school is this intern attending?',
        when: ({ role }) => {
            if (role === 'Intern') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to add another employee?',
        default: false
    }
];

// function to start application
function start(employees) {
    if(!employees) {
        employees = [];
    }

    // prompt questions
    inquirer.prompt(questions)
    .then(({ role, ...employee }) => {
        switch(role) {
            case 'Manager':
                employees.push(new Manager(employee.name, employee.email, employee.id, employee.officeNumber));
                break;
            case 'Engineer':
                employees.push(new Engineer(employee.name, employee.email, employee.id, employee.github));
                break;
            case 'Intern':
                employees.push(new Intern(employee.name, employee.email, employee.id, employee.school));
                break;
        }
        if (employee.addEmployee) {
            start(employees);
          } else {
              createPage(employees);
          }
    });
};

function createPage(employees) {
    const pageData = generatePage(employees);

    fs.writeFile('./dist/index.html', pageData, err => {
        if(err) throw err;
    });

    fs.copyFile('./src/style.css', './dist/assets/style.css', err => {
        if(err) throw err;
    });
};

start();