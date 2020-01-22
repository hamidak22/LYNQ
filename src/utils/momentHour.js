import React from 'react';
import Moment from 'moment';

// this function change format of date in order of date and time

export function momentHour(value) {
    let dateToFormat;
    if (value !== null) {
        dateToFormat = <Moment
            format="HH:mm"
            date={value}
        />;
    }
    return dateToFormat;
}
