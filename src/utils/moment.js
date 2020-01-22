import React from 'react';
import Moment from 'react-moment';

// this function change format of date in order of date and time

export function moments(value) {
    let dateToFormat;
    if (value !== null) {
        dateToFormat = <Moment
            format="D MMM YYYY HH:mm"
            date={value}
        />;
    }
    return dateToFormat;
}
