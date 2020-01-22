// this function gets an english number and returns a persian number for example englishToPersian(123456789)
// returns: ۱۲۳۴۵۶۷۸۹

export function englishToPersian(number) {
    const persianNumber = new Intl.NumberFormat('fa').format(number).split('٬').join('');
    return persianNumber;
}
