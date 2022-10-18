import { createSelector } from 'reselect';
import { minutesThisX } from 'shared-base';

const $i = () => {};

export const $periods = createSelector($i, (_i): IOption[] => {
    const minutes = minutesThisX();

    return [
        {
            id: 'lastHour',
            text: 'Last hour',
            max: 60,
        },
        {
            id: 'today',
            text: 'Today',
            max: minutes.today,
        },
        {
            id: 'thisWeek',
            text: 'This week',
            max: minutes.week,
        },
        {
            id: 'thisMonth',
            text: 'This month',
            max: minutes.month,
        },
        {
            id: 'thisYear',
            text: 'This year',
            max: minutes.year,
        },
    ];
});

export const $allOptions = createSelector($periods, (periods) => {
    return {
        $periods: periods,
    };
});
