import React from 'react';
import { Badge, Wrapper } from './NotificationsButton.style';

export type NotificationsButtonProps = {
    badge?: string;
    onClick: () => void;
};

export function NotificationsButton(props: NotificationsButtonProps) {
    const { badge } = props;

    return (
        <Wrapper
            className='NotificationsButton-wrapper notif'
            data-testid='NotificationsButton-wrapper'
            onClick={props.onClick}
        >
            <i className='material-icons notif'>notifications</i>

            {badge && <Badge>{badge}</Badge>}
        </Wrapper>
    );
}

export default NotificationsButton;
