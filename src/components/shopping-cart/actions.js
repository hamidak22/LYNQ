import * as constants from './constants';

export const setCart = (url) => ({
    type: constants.SET_CART,
    payload: {
        url,
    },
});
