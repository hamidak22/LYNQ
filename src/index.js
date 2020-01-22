import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { addLocaleData } from 'react-intl';
import * as Sentry from '@sentry/browser';
import en from 'react-intl/locale-data/en';
import fa from 'react-intl/locale-data/fa';
import { store, persistor } from './store/ConfigureStore';
import AppRouter from './routers/AppRouter';

addLocaleData([...en, ...fa]);

function configSentry() {
    Sentry.init({
        dsn: process.env.REACT_APP_SENTRY_DSN,
        environment: process.env.REACT_APP_NODE,
    });
}

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
        </PersistGate>
    </Provider>,
    global.document.querySelector('#root'),
);
configSentry();
