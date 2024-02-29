import { selectors, useDispatch, useSelector } from '@gdi/store-base';
import React, { useMemo } from 'react';
import { Notifications } from './Notifications';

export type NotificationsContainerProps = {};

export function NotificationsContainer(_props: NotificationsContainerProps) {
    const dispatch = useDispatch();
    const appState = useSelector(selectors.raw.$rawAppState);

    const callbacks = useMemo(
        () => ({
            onClick: () => {},
        }),
        []
    );

    return <Notifications />;
}

export default NotificationsContainer;
