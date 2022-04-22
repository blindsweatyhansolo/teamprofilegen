// npm packages, required modules
const inqurier = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/page-template');

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
            // run generatePage function
            generatePage();
            // console.log(teamManager, teamEngineer, teamIntern);
            // console.log('===== Confirm no new team members =====');
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
      .then(engineerData => {
          // push data to array
          teamEngineer.push(new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github));

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
            // push new data into array
            teamIntern.push(new Intern(internData.name, internData.id, internData.email, internData.school));
            // call newEmployee() again
            newEmployee();
        })
        .catch((err) => {
            // log any errors
            console.log(err);
        });
};

// function to start building html page
const generatePage = () => {
    // send all array data to generateHTML (./src/page-template)
    fs.writeFileSync('./dist/teampage.html', generateHTML(teamManager, teamEngineer, teamIntern));
    // return generateHTML(teamManager, teamEngineer, teamIntern);
    console.log(`
        ===============
            Success!   
        ===============
    File successfully created. Check the 'dist' folder for your new Team Page.
    `)
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
    .then(managerData => {
        // push new data into array
        teamManager.push(new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber));

        // call function to add new employee
        newEmployee();
    })
    .catch((err) => {
        // console log any errors
        console.log(err);
    });