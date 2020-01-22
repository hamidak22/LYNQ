import React from 'react';
import { IntlProvider, intlShape } from 'react-intl';
import { mount } from 'enzyme';

const intlProvider = new IntlProvider({
    locale: 'en',
    messages: {},
}, {});

const { intl } = intlProvider.getChildContext();

function nodeWithIntlProp(node) {
    return React.cloneElement(node, { intl });
}

export function mountWithIntl(node, { context, childContextTypes, ...additionalOptions } = {}) {
    return mount(
        nodeWithIntlProp(node),
        {
            context: Object.assign({}, context, { intl }),
            childContextTypes: Object.assign({}, { intl: intlShape }, childContextTypes),
            ...additionalOptions,
        },
    );
}
