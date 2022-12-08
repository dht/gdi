import React, { useMemo, useContext } from 'react';
import Overview3d from '../components/Overview3d/Overview3d';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';
import { InboxContainer } from './InboxContainer';
import { invokeEvent } from 'shared-base';
import { PlatformContext } from '@gdi/platformer';

export const Overview3dContainer = () => {
    const dispatch = useDispatch();
    const stats = useSelector(selectors.base.$stats);
    const { accountName, availableAccounts } =
        useContext(PlatformContext).state;

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
            onAccountChange: () => {
                dispatch({
                    type: 'CHANGE_ACCOUNT',
                    accountName,
                    availableAccounts,
                });
            },
        }),
        [accountName, availableAccounts]
    );

    return (
        <Overview3d
            accountName={accountName}
            stats={stats}
            callbacks={callbacks}
            isLoading={isLoading}
        ></Overview3d>
    );
};

export default Overview3dContainer;
