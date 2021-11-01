const generateEmployees = employees => {
    return `
        <div class='flex-row align-center justify-center col-12>
            ${employees
            .filter(({ officeNumber }) => officeNumber)
            .forEach(manager => {
                return `
                    <div class='card flex-column col-3'>
                        <div class='card-header flex-column'>
                            <h3>${manager.name}</h3>
                            <h4 class='text-secondary'>${manager.getRole()}</h4>
                        </div>
                        <div class='card-body flex-column bg-secondary'>
                            <p>ID: ${manager.id}</p>
                            <p>Email: ${manager.email}</p>
                            <p>Office Number: ${manager.officeNumber}</p>
                        </div>
                    </div>
                `
            })
            .join('')}

            ${employees
            .filter(({ github }) => github)
            .forEach(engineer => {
                return `
                    <div class='card flex-column col-3'>
                        <div class='card-header flex-column'>
                            <h3>${engineer.name}</h3>
                            <h4 class='text-secondary'>${engineer.getRole()}</h4>
                        </div>
                        <div class='card-body flex-column bg-secondary'>
                            <p>ID: ${engineer.id}</p>
                            <p>Email: ${engineer.email}</p>
                            <p>GitHub: <a href='https://github.com/${manager.github}>${manager.github}</a></p>
                        </div>
                    </div>
                `
            })
            .join('')}

            ${employees
            .filter(({ school }) => school)
            .forEach(intern => {
                return `
                    <div class='card flex-column col-3'>
                        <div class='card-header flex-column'>
                            <h3>${intern.name}</h3>
                            <h4 class='text-secondary'>${intern.getRole()}</h4>
                        </div>
                        <div class='card-body flex-column bg-secondary'>
                            <p>ID: ${intern.id}</p>
                            <p>Email: ${intern.email}</p>
                            <p>School: ${intern.school}</p>
                        </div>
                    </div>
                `
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