import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {bindActionCreators} from 'redux';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import * as languageActions from 'containers/language/actions';
import {Drawer, List, NavBar, WhiteSpace, Tabs, Button, Flex, Grid, Modal} from 'antd-mobile';
import * as actions from './actions';
import * as constants from './constants';
import 'antd-mobile/dist/antd-mobile.css';
import 'antd-mobile/dist/antd-mobile.less';

const Item = List.Item;
const Brief = Item.Brief;

export const ShoppingCart = (props) => {
    const {getData, data} = props;
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState({});
    return (
        <div>
            <NavBar
                onClick={() => setOpen(!open)}
            >
                <i className="fa fa-shopping-basket"/>&nbsp; shopping cart
            </NavBar>
            <List>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
                    if (index === 0) {
                        return (<List.Item key={index}
                                           thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                                           multipleLine
                        >Category</List.Item>);
                    }
                    return (<List.Item key={index}
                                       thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                    >Category{index}</List.Item>);
                })}
            </List>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getData: actions.setCart,
    }, dispatch);
}

const mapStateToProps = state => ({
    lang: state.locale.lang,
    data: get(state.LandingReducer, 'data', []),
});

ShoppingCart.propTypes = {
    lang: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
