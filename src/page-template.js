const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require("../lib/Engineer");
const Intern = require('../lib/Intern');

// function to generate html page with calls for functions to generate individual Engineer and Intern cards
const generateTemplate = (teamManager, teamEngineer, teamIntern) => {
    // destructured manager data
    // let { name, id, email, officeNumber } = teamManager;

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- BOOTSTRAP -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <!-- FONT AWESOME ICONS -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer">
            <link rel="stylesheet" href="./dist/style.css">
            <title>My Team</title>
        </head>
        <body>
            <header class="display-1 bg-danger">
                <h1 class="mb-0 h3 w-100 text-center text-light py-4">My Team</h1>
            </header>
        
            <main class="row justify-content-center">
                
                <!-- SECTION FOR MANAGER CARD -->
                <section class="col-12 col-md-4 justify-content-center align-content-center m-3">
                    <!-- MANAGER CARD -->
                    <div class="card shadow rounded">
                        <div class="card-header text-light bg-primary">
                            <h5>
                            ${teamManager[0].getName()}
                            </h5>
                            <i class="fa-solid fa-mug-hot"></i>
                            ${teamManager[0].getRole()}
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${teamManager[0].getId()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${teamManager[0].getEmail()}">${teamManager[0].getEmail()}</a></li>
                                <li class="list-group-item">Office Number: ${teamManager[0].getOfficeNum()}</li>
                            </ul>
                        </div>  
                    </div>
                </section>
        
                <!-- SECTION FOR ENGINEER AND INTERN CARDS -->
                <section class="row row-cols-1 row-cols-md-3 mt-2 g-4 justify-content-center">
                    <!-- ENGINEER CARDS -->


                    <!-- INTERN CARDS -->


                </section>
        
            </main>
            
            <!-- BOOTSTRAP and POPPER -->
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
        </body>
        </html>
    `
};

module.exports = generateTemplate;