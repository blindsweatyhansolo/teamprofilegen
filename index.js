// npm packages
const inqurier = require('inquirer');

const fs = require('fs');

// empty arrays for new members, using let so that they can be updated (vs const)
let teamManager = [];
let teamEngineer = [];
let teamIntern = [];

// prompts for variables
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

// function call to initialize app
const init = () => {
    bannerMessage();

    return promptManager()
        .then(managerData => {
           return managerData;
        });
};

init()
    .then(managerData => {
        console.log(managerData);
        teamManager.push(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
        console.log(teamManager);
    });