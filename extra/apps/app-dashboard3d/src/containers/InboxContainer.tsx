import React, { useMemo } from 'react';
import Inbox from '../components/Inbox/Inbox';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../store';
import { invokeEvent } from 'shared-base';

export const InboxContainer = () => {
    const dispatch = useDispatch();
    const inboxMessages = useSelector(selectors.tables.$inboxMessages);
    const allOptions = useSelector(selectors.options.$allOptions);

    const callbacks = useMemo(
        () => ({
            onDrillDown: (itemId: string) => {
                invokeEvent('navigatePush', { path: `/${itemId}` });
            },
            onSelectionChange: (ids: string[]) => {
                // console.log('ids ->', ids);
            },
            onCustomAction: (actionId: string, data?: Json) => {},
        }),
        []
    );

    return (
        <Inbox
            callbacks={callbacks}
            data={inboxMessages}
            allOptions={allOptions}
            dispatch={dispatch}
        />
    );
};

export default InboxContainer;
