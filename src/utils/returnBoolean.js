import React from 'react';
import { Icon, Tooltip } from 'antd';

// this function receive boolean value and return different icon in order of value

export function returnBoolean(value, desc) {
    let icon;
    if (value) {
        icon = desc ? (
            <Tooltip title={desc}>
                <Icon type="check-circle" />
            </Tooltip>
        )
            : <Icon type="check-circle" />;
    } else if (!value) {
        icon = desc ? (
            <Tooltip title={desc}>
                <Icon type="minus-circle" />
            </Tooltip>
        )
            : <Icon type="minus-circle" />;
    }
    return icon;
}
