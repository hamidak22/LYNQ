import { store } from 'src/store/ConfigureStore';

// this function gets a number with english digits
//       returns:
//         ۱/۲۳۴/۵۶۷ if language is fa
//         1/234/567 if language is en

export function spiritNumber(number, no_price) {
    // alert(number)
    // split number by three digit in js
    const language = store.getState().locale.lang;
    let seperatedNumber = '';
    if (language === 'fa' && typeof (number) === 'number') {
        seperatedNumber = new Intl.NumberFormat(language).format(number).split('٬').join(',');
    } else if (language === 'en' && typeof (number) === 'number') {
        if(no_price){
            seperatedNumber = new Intl.NumberFormat(language).format(number).split(',').join('.');
        }else {
            seperatedNumber = new Intl.NumberFormat(language).format(number).split(',').join(',');
        }
    }
    return seperatedNumber;
}
