import * as constants from './constants';

export const getData = (url) => ({
    type: constants.GET_DATA,
    payload: {
        url,
    },
});

export const setData = (data) => ({
    type: constants.SET_DATA,
    payload: {
        data,
    },
});

export const setCart = (data) => ({
    type: constants.SET_CART,
    payload: {
        data,
    },
});
