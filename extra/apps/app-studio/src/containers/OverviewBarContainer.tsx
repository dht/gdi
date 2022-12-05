import React, { useMemo, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, selectors } from '../store';
import { PlatformContext } from '@gdi/platformer';
import OverviewBar from '../components/OverviewBar/OverviewBar';

export type OverviewBarProps = {
    accountName: string;
    callbacks: {
        onAccountChange: () => void;
    };
    isLoading: boolean;
};

export const Overview3dContainer = (props: OverviewBarProps) => {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppStateDashboard);
    const { showNotifications } = appState;

    const notificationsBadge = 6;

    const { accountName, availableAccounts } =
        useContext(PlatformContext).state;

    const callbacks = useMemo(
        () => ({
            onAccountChange: () => {
                dispatch({
                    type: 'CHANGE_ACCOUNT',
                    accountName,
                    availableAccounts,
                });
            },
            onToggleNotifications: () => {
                dispatch(
                    actions.appStateDashboard.patch({
                        showNotifications: !showNotifications,
                    })
                );
            },
        }),
        [accountName, availableAccounts, showNotifications]
    );

    return (
        <OverviewBar
            accountName={accountName}
            callbacks={callbacks}
            notificationsBadge={notificationsBadge}
        />
    );
};

export default Overview3dContainer;
