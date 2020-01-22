
/**
 * in case if changing language this function handles adding css file for rtl direction
 * and delete it for ltr direction
 * @param lang contains selected language
 */
export function handleDirection(lang) {
    if (lang === 'fa') {
        document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
        document.getElementsByTagName('html')[0].setAttribute('lang', 'fa');
    } else if (lang === 'en') {
        document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
        document.getElementsByTagName('html')[0].setAttribute('lang', 'en');
    }
}
