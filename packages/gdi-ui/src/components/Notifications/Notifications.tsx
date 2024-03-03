import React from 'react';
import { Wrapper } from './Notifications.style';

export type NotificationsProps = {};

export function Notifications(_props: NotificationsProps) {
    return (
        <Wrapper className="Notifications-wrapper" data-testid="Notifications-wrapper">
            Notifications
        </Wrapper>
    );
}

export default Notifications;
