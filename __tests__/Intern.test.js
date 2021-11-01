const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern('Damone', 'damone@gmail.com', 1, 'University of Toronto');

    expect(intern.name).toBe('Damone');
    expect(intern.email).toBe('damone@gmail.com');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.school).toBe('University of Toronto');
});

test('gets the interns school', () => {
    const intern = new Intern('Damone', 'damone@gmail.com', 1, 'University of Toronto');

    expect(intern.getSchool()).toBe('University of Toronto');
});

test('gets the role', () => {
    const intern = new Intern('Damone', 'damone@gmail.com', 1, 'University of Toronto');

    expect(intern.getRole()).toBe('Intern');
});