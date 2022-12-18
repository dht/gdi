import React, { useMemo } from 'react';
import Notifications from '../components/Notifications/Notifications';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from '../selectors';
import { actions } from '../store';

export const NotificationsContainer = () => {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppStateDashboard);
    const inboxMessages = useSelector(selectors.base.$inboxMessages);
    const { showNotifications } = appState;

    const callbacks = useMemo(
        () => ({
            onClearNotifications: () => {
                console.log('onClearNotifications');
            },
            onClose: () => {
                dispatch(
                    actions.appStateDashboard.patch({
                        showNotifications: false,
                    })
                );
            },
            onClick: (item: Json) => {
                dispatch({
                    type: 'INBOX_OPEN_ITEM',
                    item,
                });
            },
            onSnooze: (item: Json) => {
                dispatch({
                    type: 'INBOX_SNOOZE_ITEM',
                    item,
                });
            },
        }),
        [showNotifications]
    );

    if (!showNotifications) {
        return null;
    }

    return (
        <Notifications inboxMessages={inboxMessages} callbacks={callbacks} />
    );
};

export default NotificationsContainer;
