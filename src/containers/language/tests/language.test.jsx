import React from 'react';
import expect, { spyOn } from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LanguageSwitcher } from '../LanguageSwitcher';
import locale from '../reducer';
import * as actions from '../actions';
import * as actionTypes from '../constants';

Enzyme.configure({ adapter: new Adapter() });

describe('language switcher', () => {
    const props = {
        lang: 'en',
        setLocale: test => test,
    };
    const component = shallow(
        <LanguageSwitcher {...props} />,
    );
    const changeLanguageSpy = spyOn(component.instance(), 'changeLanguage');
    it('should exist', () => {
        expect(component).toExist();
    });
    it('should call change language function', () => {
        component.find('button').simulate('click');
        expect(changeLanguageSpy).toHaveBeenCalled();
    });
});

describe('actions', () => {
    it('should create set locale action', () => {
        const lang = 'fa';
        const expectedAction = {
            type: actionTypes.SET_LOCALE,
            payload: {
                lang,
            },
        };
        expect(actions.setLocale(lang)).toEqual(expectedAction);
    });
});

describe('language reducer', () => {
    it('should exist', () => {
        expect(locale()).toExist();
    });
    it('should return the initial state', () => {
        expect(locale(undefined, {})).toEqual({ lang: 'en' });
    });
    it('should handle SET_LOCALE', () => {
        expect(
            locale([], {
                type: actionTypes.SET_LOCALE,
                payload: { lang: 'en' },
            }),
        ).toEqual({ lang: 'en' });
    });
});
