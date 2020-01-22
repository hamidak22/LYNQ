import {
    call,
    takeEvery,
} from 'redux-saga/effects';
import {store} from 'src/store/ConfigureStore';
import Ajax from 'src/api/Ajax';
import findIndex from 'lodash/findIndex';
import uniq from 'lodash/uniq';
import pull from 'lodash/pull';
import * as actions from './actions';
import * as constants from './constants';

function* getData(action) {
    const {url} = action.payload;
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

function* setCart(action) {
    const { data } = action.payload;
    const lastCacheDateString = JSON.parse(localStorage.getItem('cart'));
    const modifyData = lastCacheDateString || [];
    const currentId = findIndex(lastCacheDateString, function(o) { return o.id == data.id; });
    if (currentId !== -1) {
        Object.assign(lastCacheDateString[currentId], { count: lastCacheDateString[currentId].count + 1 });
        modifyData.push(lastCacheDateString[currentId]);
    } else {
        Object.assign(data, { count: 1 });
        modifyData.push(data);
    }
    const finalArray = uniq(modifyData);
    localStorage.setItem('cart', JSON.stringify(finalArray));
}

function* getDataSaga() {
    yield takeEvery(constants.GET_DATA, getData);
}

function* setCartSaga() {
    yield takeEvery(constants.SET_CART, setCart);
}

export default [
    getDataSaga(),
    setCartSaga(),
];
