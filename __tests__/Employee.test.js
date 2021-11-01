const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Damone', 'damone@gmail.com', 1);

    expect(employee.name).toBe('Damone');
    expect(employee.email).toBe('damone@gmail.com');
    expect(employee.id).toBe(1);
});

test('gets the name of Employee', () => {
    const employee = new Employee('Damone', 'damone@gmail.com', 1);

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('gets the email of the Employee', () => {
    const employee = new Employee('Damone', 'damone@gmail.com', 1);

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets the id of the Employee', () => {
    const employee = new Employee('Damone', 'damone@gmail.com', 1);

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets the role of the Employee', () => {
    const employee = new Employee('Damone', 'damone@gmail.com', 1);

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})