const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Damone', 'damone@gmail.com', 1, 'user123');

    expect(engineer.name).toBe('Damone');
    expect(engineer.email).toBe('damone@gmail.com');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.github).toBe('user123');
});

test('gets Engineer github', () => {
    const engineer = new Engineer('Damone', 'damone@gmail.com', 1, 'user123');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets the role', () => {
    const engineer = new Engineer('Damone', 'damone@gmail.com', 1, 'user123');

    expect(engineer.getRole()).toBe('Engineer');
})