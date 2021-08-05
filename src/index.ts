const arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

function convert(string: string): string | boolean {
    try {
        for (let i = 0; i < 10; i++) {
            string = string.replace(arabicNumbers[i], i.toString());
        }
    } catch (e) {
        console.error(e);
        return false;
    }

    return string;
}

export default convert;
