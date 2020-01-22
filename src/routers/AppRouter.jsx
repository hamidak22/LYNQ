import React, {Component} from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Loadable from 'react-loadable';
import {IntlProvider} from 'react-intl';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';
import createHistory from 'history/createBrowserHistory';
import en from 'containers/language/global/en.json';
import LandingPage from '../components/landing-page/LandingPage';
import './global.less';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';
import 'nprogress/nprogress.css';

const messages = {
    en,
};

export const history = createHistory();

class AppRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {error: null};
    }

    componentDidCatch(error, errorInfo) {
        this.setState({error});
        Sentry.withScope(scope => {
            Object.keys(errorInfo).forEach(key => {
                scope.setExtra(key, errorInfo[key]);
            });
            Sentry.captureException(error);
        });
    }

    render() {
        const {
            lang,
        } = this.props;
        return (
            <IntlProvider locale={lang} messages={messages[lang]}>
                <Router history={history}>
                    <div>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={props => (
                                    <LandingPage {...props} />
                                )}
                            />
                        </Switch>
                    </div>
                </Router>
            </IntlProvider>
        );
    }
}

AppRouter.propTypes = {
    lang: PropTypes.string.isRequired,
};

export default AppRouter;
