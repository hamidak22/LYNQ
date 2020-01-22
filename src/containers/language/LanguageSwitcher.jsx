import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import * as languageActions from 'containers/language/actions';

/*
 LanguageSwitcher is a component to show header in public pages
 */
export class LanguageSwitcher extends Component {
    changeLanguage = (language) => {
        const { changeLocale } = this.props;
        changeLocale(language);
    };

    render(){
        const { lang, beDark } = this.props;
        return (
            <div className="language-switcher">
                {lang === 'fa'
                    ? (
                        <Tooltip placement="bottom" title={<div className="language">English</div>}>
                            <a className={beDark ? "beDark english" : null} onClick={() => this.changeLanguage('en')}>
                                EN
                            </a>
                        </Tooltip>
                    )
                    : (
                        <Tooltip placement="bottom" title={<div className="language beDark">فارسی</div>}>
                            <a className={beDark ? "beDark language" : "language"} onClick={() => this.changeLanguage('fa')}>
                                فا
                            </a>
                        </Tooltip>
                    )
                }
            </div>
        );
    }
};

/*
 mapStateToProps is a function that we
 use to get data from redux state
 lang in redux state will show us selected language
 */
const mapStateToProps = state => ({
    lang: state.locale.lang,
});

/*
 mapDispatchToProps is a function that we
 use to dispatch actions from redux
 setLocale is action that handles changing language
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeLocale: languageActions.changeLocale,
    }, dispatch);
}

LanguageSwitcher.propTypes = {
    lang: PropTypes.string.isRequired,
    changeLocale: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);
