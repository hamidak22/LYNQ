import {
    call,
    takeEvery,
} from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { store } from 'src/store/ConfigureStore';
import { alert } from 'containers/alert/Alerts';
import * as actions from './actions';
import * as constants from './constants';

function* changeLocale(action) {
    const { lang } = action.payload;
    yield store.dispatch(actions.setLocaleLoading(true));
    yield store.dispatch(actions.setLocale(lang));
    yield delay(250);
    yield window.location.reload();
}

function* changeLocaleSaga() {
    yield takeEvery(constants.CHANGE_LOCALE, changeLocale);
}

export default [
    changeLocaleSaga(),
];
