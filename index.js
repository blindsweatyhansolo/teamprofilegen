// npm packages
const inqurier = require('inquirer');

const fs = require('fs');

// empty arrays for new members, using let so that they can be updated (vs const)
let teamManager = [];
let teamEngineer = [];
let teamIntern = [];

// function to display banner message
const bannerMessage = () => {
    // banner message
    console.log(
        `
            ======================
            TEAM PROFILE GENERATOR
            ======================
        Welcome to Team Profile Generator!
        Please answer the prompts with your team information.
        `
    );
};

// prompts for Manager data
const promptManager = () => {
    // prompts for initial setup for manager data (main user)
    return inqurier
      .prompt([
          {
            // prompt for name
            name: 'name',
            message: 'Please enter your name:',
            validate: input => input ? true : 'Name is required.'
          },
          {
              // prompt for id number
              name: 'id',
              message: 'Please provide your Manager ID number:',
              // validate id value is a number
              validate: (answer) => {
                if (isNaN(answer)) {
                  return "Input must be an integer (number)";
                }
                return true;
              }
          },
          {
              // prompt for email
              name: 'email',
              message: 'Please enter your e-mail:',
              validate: input => input ? true : 'An e-mail is required.'
          },
          {
              // prompt for office number
              name: 'officeNumber',
              message: 'Please enter your office number:',
              validate: input => input ? true : 'Your office number is required.'
          }
    ])
};

// function to add new employee
const newEmployee = () => {
    return inqurier
    .prompt([
        {
            // confirm add new employee
            type: 'confirm',
            name: 'newEmployee',
            message: 'Would you like to add another team member?',
            default: true
        },
        {
            // prompt for role type from list
            type: 'list',
            name: 'role',
            choices: ['Engineer', 'Intern'],
            when: ({ newEmployee }) => newEmployee
        }
    ])
    .then((newEmployeeAnswers) => {
        if (newEmployeeAnswers.newEmployee) {
            switch(newEmployeeAnswers.role)
            {
                case 'Engineer':
                    newEngineer();
                    break;
                case 'Intern':
                    newIntern();
                    break;
            };
        } else {
            // run renderHTML function
            console.log('Confirm no new team members');
        }
    });
};

// function to add new Engineer data
const newEngineer = () => {
    console.log(
        `
        ====================
        New Member: Engineer
        ====================
        `
    );

    return inqurier
      .prompt([
          {
              name: 'name',
              message: "Please enter Engineer's name:",
              validate: input => input ? true : 'Name required.'
          },
          {
              name: 'id',
              message: "Please enter Engineer's ID number:",
              validate: (answer) => {
                if (isNaN(answer)) {
                  return "Input must be an integer (number)";
                }
                return true;
              }
          },
          {
              name: 'email',
              message: "Please enter Engineer's e-mail:",
              validate: input => input ? true : 'E-mail required.'
          },
          {
              name: 'github',
              message: "Please enter Engineer's GitHub Account name:",
              validate: input => input ? true : 'GitHub account name required.'
          }
      ])
      .then(engineerData => {
          console.log(engineerData);
          teamEngineer.push(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
          console.log(teamEngineer);
          newEmployee();
      })
      .catch((err) => {
          console.log(err);
      });
};

// function to initialize app
const init = () => {
    bannerMessage();

    return promptManager()
        .then(managerData => {
           return managerData;
        });
};

// call to start app, push data
init()
    .then(managerData => {
        console.log(managerData);
        teamManager.push(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
        console.log(teamManager);
        newEmployee();
    })
    .catch((err) => {
        console.log(err);
    });