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
            // prompt for role type from list, runs when newEmployee is true
            type: 'list',
            name: 'role',
            choices: ['Engineer', 'Intern'],
            when: ({ newEmployee }) => newEmployee
        }
    ])
    // answers from prompt pulled into function
    .then((newEmployeeAnswers) => {
        // if confirm from newEmployee is true: create switch case for employee type
        if (newEmployeeAnswers.newEmployee) {
            switch(newEmployeeAnswers.role)
            {
                // call newEngineer() if 'Engineer' is selected from list
                case 'Engineer':
                    newEngineer();
                    break;
                // call newIntern() if 'Intern' is selected from list
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
    // banner message for new Engineer
    console.log(
        `
        ====================
        New Member: Engineer
        ====================
        `
    );

    // new Engineer prompts
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
      // push prompt data to teamEngineer array
      .then(engineerData => {
          console.log(engineerData);
          teamEngineer.push(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
          console.log(teamEngineer);
          // call newEmployee() again
          newEmployee();
      })
      .catch((err) => {
          // log any errors
          console.log(err);
      });
};

// function to add new Intern data
const newIntern = () => {
    // banner message for new Intern
    console.log(
        `
        ==================
        New Member: Intern
        ==================
        `
    );

    // new Intern prompts
    return inqurier
      .prompt([
          {
            name: 'name',
            message: "Please enter Intern's name:",
            validate: input => input ? true : 'Name required.'
          },
          {
            name: 'id',
            message: "Please enter Intern's ID number:",
            validate: (answer) => {
              if (isNaN(answer)) {
                return "Input must be an integer (number)";
              }
              return true;
            }
          },
          {
            name: 'email',
            message: "Please enter Intern's e-mail:",
            validate: input => input ? true : 'E-mail required.'
          },
          {
            name: 'school',
            message: "Please enter Intern's school name:",
            validate: input => input ? true : 'School name required.'
          }
        ])
        .then(internData => {
            console.log(internData);
            teamIntern.push(internData.name, internData.id, internData.email, internData.school);
            console.log(teamIntern);
            // call newEmployee() again
            newEmployee();
        })
        .catch((err) => {
            // log any errors
            console.log(err);
        });
};

// function to initialize app staring with banner message then the prompts for manager data
const init = () => {
    // call to display banner message
    bannerMessage();

    // call promptManager, return data
    return promptManager()
        .then(managerData => {
           return managerData;
        });
};

// call to start app, push data
init()
    // push managerData to teamManager array
    .then(managerData => {
        // console.log(managerData);
        teamManager.push(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
        // console.log(teamManager);

        // call function to add new employee
        newEmployee();
    })
    .catch((err) => {
        // console log any errors
        console.log(err);
    });