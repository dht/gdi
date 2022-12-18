import React, { useMemo, useContext } from 'react';
import Overview from '../components/Overview/Overview';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';
import { InboxContainer } from './InboxContainer';
import { invokeEvent } from 'shared-base';
import { PlatformContext } from '@gdi/platformer';
import { HoustonContainer } from './HoustonContainer';

export const OverviewContainer = () => {
    const dispatch = useDispatch();
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
        }),
        [accountName, availableAccounts]
    );

    return (
        <Overview accountName={accountName} callbacks={callbacks}>
            <InboxContainer />
            <HoustonContainer />
        </Overview>
    );
};

export default OverviewContainer;
