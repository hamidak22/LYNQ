import * as constants from './constants';

const defaultState = {
    data: [],
};

export default function locale(state = defaultState, action = {}) {
    switch (action.type) {
    case constants.SET_DATA:
        return {
            ...state,
            data: action.payload.data,
        };
    default:
        return state;
    }
}
