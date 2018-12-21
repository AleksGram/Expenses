const add = (a, b) => a+b;
const generateGreeting = (name) => `Hello ${name}!`;

test('check sum', () => {
    const result = add(3,7)

    expect(result).toBe(10)
})

test('greet', () => {
    const greet = generateGreeting('Alex');

    expect(greet).toContain('Alex')
})