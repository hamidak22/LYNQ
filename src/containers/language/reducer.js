import * as constants from './constants';

const defaultState = {
    lang: 'fa',
    langLoading: false,
};

/*
 locale reducer to change language
 handleRtlCssFile is a function to add css file for changing rtl and ltr
 */
export default function locale(state = defaultState, action = {}) {
    switch (action.type) {
    case constants.SET_LOCALE:
        return {
            ...state,
            lang: action.payload.lang,
        };
    case constants.SET_LOCALE_LOADING:
        return {
            ...state,
            langLoading: action.payload.loading,
        };
    default:
        return state;
    }
}
