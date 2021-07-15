const arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

/**
 * @param {string} string
 * @return string|boolean
 */
function convert (string) {
    if (typeof string !== 'string') return false;

    let i = 0;
    for (; i < 10; i++) {
        string = string.replace(arabicNumbers[i], i);
    }

    return string;
}

module.exports = convert;
