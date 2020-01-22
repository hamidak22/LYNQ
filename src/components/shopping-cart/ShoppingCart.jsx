import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {bindActionCreators} from 'redux';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import * as languageActions from 'containers/language/actions';
import { Drawer, List, NavBar, WhiteSpace, Tabs, Button, Flex, Grid, Modal } from 'antd-mobile';
import * as actions from './actions';
import * as constants from './constants';
import LandingWrapper from './assets/styles/landing.style';
import 'antd-mobile/dist/antd-mobile.css';
import 'antd-mobile/dist/antd-mobile.less';

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
/*
LandingPage is a component for to show components and handle loading
*/
export const LandingPage = (props) => {
    const {getData, data} = props;
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState({});
    useEffect(() => {
        getData(constants.BEER_URL);
    }, []);
    const sidebar = (<div>
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
    </div>);
    const tabs = [
        {title: <i className="fa fa-mug-hot fa-2x"/>},
        {title: <i className="fa fa-utensils fa-2x"/>},
        {title: <i className="fa fa-percentage fa-2x"/>},
        {title: <i className="fa fa-search fa-2x"/>},
    ];
    const secondTabs = [
        {title: 'ALL'},
        {title: 'PIZZA'},
        {title: 'STEAK'},
    ];
    const onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    };
    return (
        <div>
            <Helmet>
                <title>Pishro Cloud Computing | رایانش ابری پیشرو</title>
                <meta
                    name="description"
                    content=""
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=yes minimum-scale=1 maximum-scale=3"
                />
            </Helmet>
            <LandingWrapper>
                <h1>
                    Demo App
                </h1>
                <Modal
                    visible={!isEmpty(modal)}
                    transparent
                    maskClosable={true}
                    onClose={() => setModal(false)}
                    title={modal.name}
                    wrapProps={{ onTouchStart: (e) => onWrapTouchStart(e) }}
                >
                    <div style={{ 'font-size': '12px', textAlign: 'left' }}>
                        <Flex>
                            <Flex.Item>
                                <div>{modal.tagline}</div>
                                <div>{modal.tagline}</div>
                                <div>{modal.abv}</div>
                            </Flex.Item>
                            <Flex.Item align="end">
                                <div className="modal-image-wrapper">
                                    <img src={modal.image_url} />
                                </div>
                            </Flex.Item>
                        </Flex>
                        <WhiteSpace size="lg" />
                        <Flex>
                            <Flex.Item>
                                <div className="long-text">{modal.description}</div>
                                <div className="long-text">{modal.food_pairing}</div>
                            </Flex.Item>
                            <Flex.Item>
                                <Button size="small">Add to cart</Button>
                            </Flex.Item>
                        </Flex>
                    </div>
                </Modal>
                <Drawer
                    className="my-drawer"
                    style={{minHeight: document.documentElement.clientHeight}}
                    contentStyle={{color: '#A6A6A6', textAlign: 'center'}}
                    sidebar={sidebar}
                    open={open}
                    onOpenChange={() => setOpen(!open)}
                    position="bottom"
                    touch={false}
                    enableDragHandle={false}
                    docked={false}
                >
                    <Tabs tabs={tabs}
                          initialPage={0}
                          swipeable={false}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            backgroundColor: '#fff',
                        }}>
                            <div className="child-tabs">
                                <Tabs tabs={secondTabs}
                                      initialPage={0}
                                >
                                    <div>
                                        <Grid
                                            data={data.all}
                                            activeStyle={false}
                                            columnNum={3}
                                            hasLine={false}
                                            renderItem={dataItem => (
                                                <div onClick={() => setModal(dataItem)} className="grids-item">
                                                    <div className="image-wrapper">
                                                        <img src={dataItem.image_url} alt="" />
                                                    </div>
                                                    <div>
                                                        {dataItem.name}
                                                    </div>
                                                    <div>
                                                        {dataItem.abv}
                                                    </div>
                                                </div>
                                            )}
                                        />
                                    </div>
                                    <div>
                                        <Grid
                                            data={data.pizza}
                                            activeStyle={false}
                                            columnNum={3}
                                            hasLine={false}
                                            renderItem={dataItem => (
                                                <div onClick={() => setModal(dataItem)} className="grids-item">
                                                    <div className="image-wrapper">
                                                        <img src={dataItem.image_url} alt=""/>
                                                    </div>
                                                    <div>
                                                        {dataItem.name}
                                                    </div>
                                                    <div>
                                                        {dataItem.abv}
                                                    </div>
                                                </div>
                                            )}
                                        />
                                    </div>
                                    <div>
                                        <Grid
                                            data={data.steak}
                                            activeStyle={false}
                                            columnNum={3}
                                            hasLine={false}
                                            renderItem={dataItem => (
                                                <div onClick={() => setModal(dataItem)} className="grids-item">
                                                    <div className="image-wrapper">
                                                        <img src={dataItem.image_url} alt=""/>
                                                    </div>
                                                    <div>
                                                        {dataItem.name}
                                                    </div>
                                                    <div>
                                                        {dataItem.abv}
                                                    </div>
                                                </div>
                                            )}
                                        />
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                        <div>
                            Empty data
                        </div>
                        <div>
                            Empty data
                        </div>
                        <div>
                            Empty data
                        </div>
                    </Tabs>
                    <NavBar
                        onClick={() => setOpen(!open)}
                    >
                        <i className="fa fa-shopping-basket"/>&nbsp; shopping cart
                    </NavBar>
                </Drawer>
            </LandingWrapper>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getData: actions.getData,
    }, dispatch);
}

const mapStateToProps = state => ({
    lang: state.locale.lang,
    data: get(state.LandingReducer, 'data', []),
});

LandingPage.propTypes = {
    lang: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
