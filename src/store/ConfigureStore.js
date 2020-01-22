import {
    createStore, combineReducers, applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import locale from 'containers/language/reducer';
import LocaleSagas from 'containers/language/sagas';
import LandingReducer from 'components/landing-page/reducer';
import LandingSagas from 'components/landing-page/sagas';

import * as constants from './constants';

const sagaMiddleware = createSagaMiddleware();

// redux persist config
const persistConfig = {
    key: 'root',
    storage,
};

// set all reducers as RootReducer
const appReducer = combineReducers({
    locale,
    LandingReducer,
});

const sagas = function* () {
    yield [
        ...LocaleSagas,
        ...LandingSagas,
    ];
};

const RootReducer = (state, action) => {
    if (action.type === constants.SET_LOGOUT_USER) {
        Object.keys(state)
            .forEach((key) => {
                if (key !== 'LayoutReducer') {
                    storage.removeItem(`persist:${key}`);
                }
            });
    }
    return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, RootReducer);
const logger = createLogger();

// export store with persistedReducer
export const store = createStore(
    persistedReducer,
    applyMiddleware(
        sagaMiddleware,
        logger,
    ),
);

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);
