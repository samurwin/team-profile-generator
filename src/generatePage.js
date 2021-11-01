const generateEmployees = employees => {
    return `
        <div class='flex-row align-center justify-center col-12'>
            ${employees
            .filter(({ officeNumber }) => officeNumber)
            .map(Manager => {
                return `
                    <div class='card flex-column col-3'>
                        <div class='card-header flex-column'>
                            <h3>${Manager.name}</h3>
                            <h4 class='text-secondary'>${Manager.getRole()}</h4>
                        </div>
                        <div class='card-body flex-column bg-secondary'>
                            <p>ID: ${Manager.id}</p>
                            <p>Email: ${Manager.email}</p>
                            <p>Office Number: ${Manager.officeNumber}</p>
                        </div>
                    </div>
                `;
            })
            .join('')}

            ${employees
            .filter(({ github }) => github)
            .map(Engineer => {
                return `
                    <div class='card flex-column col-3'>
                        <div class='card-header flex-column'>
                            <h3>${Engineer.name}</h3>
                            <h4 class='text-secondary'>${Engineer.getRole()}</h4>
                        </div>
                        <div class='card-body flex-column bg-secondary'>
                            <p>ID: ${Engineer.id}</p>
                            <p>Email: ${Engineer.email}</p>
                            <p>GitHub: <a href='https://github.com/${Engineer.github}'>${Engineer.github}</a></p>
                        </div>
                    </div>
                `;
            })
            .join('')}

            ${employees
            .filter(({ school }) => school)
            .map(Intern => {
                return `
                    <div class='card flex-column col-3'>
                        <div class='card-header flex-column'>
                            <h3>${Intern.name}</h3>
                            <h4 class='text-secondary'>${Intern.getRole()}</h4>
                        </div>
                        <div class='card-body flex-column bg-secondary'>
                            <p>ID: ${Intern.id}</p>
                            <p>Email: ${Intern.email}</p>
                            <p>School: ${Intern.school}</p>
                        </div>
                    </div>
                `;
            })
            .join('')}
        </div>
    `
}

module.exports = employees => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./assets/style.css">
    </head>

    <body>
    <header>
        <h1 class='page-title'>My Team</h1>
    </header>

    <main class='container my-5'>
        ${generateEmployees(employees)}
    </main>
    </body>
    `
}