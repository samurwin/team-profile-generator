const Manager = require('../lib/Manager');

test('creates Manager object', () => {
    const manager = new Manager('Damone', 'damone@gmail.com', 1, 101);

    expect(manager.name).toBe('Damone');
    expect(manager.email).toBe('damone@gmail.com');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.officeNumber).toBe(101);
});

test('gets the role', () => {
    const manager = new Manager('Damone', 'damone@gmail.com', 1, 101);

    expect(manager.getRole()).toBe('Manager');
});