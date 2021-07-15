const convert = require('./index');

test('it can convert arabic numbers to english numbers', () => {
    expect(convert('test ١٢٣')).toBe('test 123');
    expect(convert('كلمة ١٢٣')).toBe('كلمة 123');
    expect(convert('٠١٢٣٤٥٦٧٨٩')).toBe('0123456789');
    expect(convert({})).toBe(false);
    expect(convert([])).toBe(false);
});
