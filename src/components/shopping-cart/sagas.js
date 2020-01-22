import {
    call,
    takeEvery,
} from 'redux-saga/effects';
import {store} from 'src/store/ConfigureStore';
import Ajax from 'src/api/Ajax';
import * as actions from './actions';
import * as constants from './constants';

function* setCart(action) {
    const { data } = action.payload;
    yield call(() => new Ajax({
        success: (response) => {
            const pizzaData = response.data.filter(
                item => item.food_pairing.some(name => name.split(' ').includes('pizza')),
            );
            const steakData = response.data.filter(
                item => item.food_pairing.some(name => name.split(' ').includes('steak')),
            );
            store.dispatch(actions.setData({
                all: response.data,
                pizza: pizzaData,
                steak: steakData,
            }));
        },
    }).setMethod('get')
        .setUrl(url)
        .send());
}

function* setCartSaga() {
    yield takeEvery(constants.SET_CART, setCart);
}

export default [
    setCartSaga(),
];
