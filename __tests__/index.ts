import convert from '../dist';

const commonjsConvert = require('../dist').default;

test('it can convert arabic numbers to english numbers', function () {
    expect(convert('test ١٢٣')).toBe('test 123');
    expect(convert('كلمة ١٢٣')).toBe('كلمة 123');
    expect(convert('٠١٢٣٤٥٦٧٨٩')).toBe('0123456789');
    // @ts-ignore
    expect(convert({})).toBe(false);
    // @ts-ignore
    expect(convert([])).toBe(false);

    expect(commonjsConvert('test ١٢٣')).toBe('test 123');
    expect(commonjsConvert('كلمة ١٢٣')).toBe('كلمة 123');
    expect(commonjsConvert('٠١٢٣٤٥٦٧٨٩')).toBe('0123456789');
    // @ts-ignore
    expect(commonjsConvert({})).toBe(false);
    // @ts-ignore
    expect(commonjsConvert([])).toBe(false);
});
