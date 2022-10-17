import React, { useMemo } from 'react';
import Overview from '../components/Overview/Overview';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';
import { invokeEvent } from 'shared-base';

export const OverviewContainer = () => {
    const dispatch = useDispatch();
    const stats = useSelector(selectors.base.$stats);

    const callbacks = useMemo(
        () => ({
            onClick: async (stat: IStat, withShift?: boolean) => {
                dispatch({
                    type: 'STAT_CLICK',
                    stat,
                    withShift,
                });
            },
            onNavigate: (stat: IStat) => {
                const { href } = stat;

                if (!href) {
                    return;
                }

                invokeEvent('navigate', { path: href });
            },
        }),
        []
    );

    return <Overview stats={stats} callbacks={callbacks} />;
};
