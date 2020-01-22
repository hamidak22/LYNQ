import * as constants from './constants';

/**
 * setLocale is an action to change language
 * @param lang is selected language by user
 */
export const setLocale = (lang) => ({
    type: constants.SET_LOCALE,
    payload: {
        lang,
    },
});

/**
 * setLocaleLoading is an action to change language
 */
export const setLocaleLoading = (loading) => ({
    type: constants.SET_LOCALE_LOADING,
    payload: {
        loading,
    },
});

/**
 * changeLocale is an action to change language
 * @param lang is selected language by user
 */
export const changeLocale = lang => ({
    type: constants.CHANGE_LOCALE,
    payload: {
        lang,
    },
});
