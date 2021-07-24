import { convert } from '../src';

test('it can convert arabic numbers to english numbers', () => {
    expect(convert('test ١٢٣')).toBe('test 123');
    expect(convert('كلمة ١٢٣')).toBe('كلمة 123');
    expect(convert('٠١٢٣٤٥٦٧٨٩')).toBe('0123456789');
    // @ts-ignore
    expect(convert({})).toBe(false);
    // @ts-ignore
    expect(convert([])).toBe(false);
});
