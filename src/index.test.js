const convert = require('./index');

test('it can convert arabic numbers to english numbers', () => {
    expect(convert('test ١٢٣')).toBe('test 123');
    expect(convert('كلمة ١٢٣')).toBe('كلمة 123');
    expect(convert('٠١٢٣٤٥٦٧٨٩')).toBe('0123456789');

    const object = {};
    const array = [];

    expect(convert(object)).toBe(object);
    expect(convert(array)).toBe(array);
});
