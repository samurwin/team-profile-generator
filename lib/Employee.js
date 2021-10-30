class Employee {
    constructor(name, email, id) {
        this.name = name,
        this.email = email,
        this.id = id
    } 
    getName() {
        return `This employee's name is: ${this.name}`;
    }

    getEmail() {
        return `${this.name}'s email is: ${this.email}`;
    }

    getId() {
        return this.id;
    }

    getRole() {
        return `Employee`;
    }
}

module.exports = Employee;