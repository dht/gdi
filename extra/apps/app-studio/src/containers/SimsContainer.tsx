import React, { useContext, useMemo } from 'react';
import Sims from '../components/Sims/Sims';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../selectors';
import { invokeEvent } from 'shared-base';

export const SimsContainer = () => {
    const dispatch = useDispatch();
    const stats = useSelector(selectors.base.$stats);

    const isLoading = Object.keys(stats).length === 0;

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

    return <Sims stats={stats} callbacks={callbacks} isLoading={isLoading} />;
};

export default SimsContainer;
