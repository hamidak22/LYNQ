import axios from 'axios';
import replace from 'lodash/replace';
import pull from 'lodash/pull';
import get from 'lodash/get';
import concat from 'lodash/concat';
import split from 'lodash/split';
import NProgress from 'nprogress';
import { history } from 'src/routers/AppRouter';
import { store } from 'src/store/ConfigureStore';
import * as constants from './constants';

export default class ajax {
    constructor(params = {}) {
        this.data = params.data || {};
        this.method = params.method || 'GET';
        this.url = params.url;
        this.event = params.event || '';
        this.show_message = params.show_message || false;
        this.config = params.config || {};
        this.loading = params.loading || true;
        this.token = params.token || '';

        console.log(constants.BASE_API_URL, 'constants.BASE_API_URL');
        console.log(this.url, 'constants.BASE_API_URL');

        this.success = (res) => {
            if (this.loading === true) {
                window.ajaxInstanceRun--;
                if (window.ajaxInstanceRun == 0) {

                }
            }
            if (res.data.status === 'UNAUTHORIZED') {
                window.location.replace('/authentication/login');
            }
            if (params.runOnSuccess) params.runOnSuccess(res);
            if (params.success) {
                if (typeof params.success === 'function') {
                    params.success(res);
                }
            } else if (this.event !== '') {
                store.dispatch({ type: this.event, success: true, data: res });
            }
        };
        this.error = (error) => {
            const requestURL = get(store.getState().LoadingReducer.loadData, 'requestURL', '');
            const errorType = get(store.getState().LoadingReducer.loadData, 'errorType', '');
            const selectedRegion = store.getState().Authentication.selectedRegion;

            console.log('error in ajax', error);
            if (error.response) {
                if (error.response.status === 400 && selectedRegion === false) {
                }
                if (error.response.status === 401) {
                    if (this.url !== 'api/v1/profile/') {
                        history.push('/authentication/login');
                        if (errorType !== error.response.status) {
                        }
                    }
                } else if (error.response.status === 404) {
                    if (error.response.data.message) {
                    } else {
                    }
                } else if (error.response.data.message !== undefined && selectedRegion !== false) {
                } else if (selectedRegion !== false) {
                }
            } else {
            }

            if (this.event === 'interval') {
                NProgress.done();
            } else {

            }
            // handle local error
            if (params.error) params.error(error);
        };
    }

    send() {
        const options = {
            url: constants.BASE_API_URL + this.url,
            method: this.method,
            data: this.data,
            config: this.config,
            timeout: 50000,
        };
        console.log(options, 'wwwww');
        axios(options).then((this.success)).catch(this.error);
    }

    setMethod(method) {
        this.method = method;
        return this;
    }

    setToken(token) {
        this.token = token;
        return this;
    }

    setUrl(url) {
        this.url = url;
        return this;
    }

    setEvent(event) {
        this.event = event;
        return this;
    }

    setData(data) {
        this.data = data;
        return this;
    }

    setConfigs(config) {
        this.config = config;
        return this;
    }

    setConfig(key, value) {
        this.config[key] = value;
        return this;
    }

    needloading(loading) {
        this.loading = loading;
        return this;
    }
}
