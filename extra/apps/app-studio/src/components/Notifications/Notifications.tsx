import React, { useMemo, useRef } from 'react';
import { Icon, HashTags } from '@gdi/web-ui';
import { time } from '@gdi/language';
import { useClickAway } from '@gdi/hooks';
import {
    Action,
    Actions,
    Body,
    Brand,
    Description,
    Details,
    IconContainer,
    Row,
    Title,
    Wrapper,
    Time,
    BottomBar,
    A,
    TimeAndActions,
    Rows,
} from './Notifications.style';

export type NotificationsProps = {
    inboxMessages: IInboxMessage[];
    callbacks: {
        onClearNotifications: () => void;
        onClose: () => void;
        onClick: (item: Json) => void;
        onSnooze: (item: Json) => void;
    };
};

export function Notifications(props: NotificationsProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { inboxMessages, callbacks } = props;

    function renderRow(item: Json) {
        return (
            <Notification
                key={item.id}
                item={item}
                onClick={callbacks.onClick}
                onSnooze={callbacks.onSnooze}
            />
        );
    }

    function renderRows() {
        return inboxMessages.map((item: Json) => renderRow(item));
    }

    useClickAway(
        ref,
        (ev: any) => {
            if (ev.target.className.includes('notif')) {
                return;
            }
            callbacks.onClose();
        },
        []
    );

    return (
        <Wrapper
            className='Notifications-wrapper animate__animated animate__fadeIn'
            data-testid='Notifications-wrapper'
            ref={ref}
        >
            <Rows>{renderRows()}</Rows>
            <BottomBar>
                <A onClick={callbacks.onClearNotifications}>
                    <i className='material-icons'>clear_all</i>
                    <span>Clear notifications</span>
                </A>
            </BottomBar>
        </Wrapper>
    );
}

type NotificationProps = {
    item: Json;
    onClick: (item: Json) => void;
    onSnooze: (item: Json) => void;
};

function Notification(props: NotificationProps) {
    const { item } = props;
    const { date, title, description, iconName, iconLogoUrl, tags = [] } = item;

    const timeText = time(date);

    function renderIcon() {
        return (
            <IconContainer>
                {iconLogoUrl ? (
                    <Brand src={iconLogoUrl}></Brand>
                ) : (
                    <Icon iconName={iconName} />
                )}
            </IconContainer>
        );
    }

    function renderTime() {
        const parts = timeText.split(' ');

        return (
            <Time className='time'>
                {parts[0]}
                <span>{parts[1]}</span>
            </Time>
        );
    }

    function renderTimeAndActions() {
        return (
            <TimeAndActions>
                {renderTime()}
                <Actions className='actions'>
                    <Action
                        onClick={(ev) => {
                            ev.stopPropagation();
                            props.onSnooze(item);
                        }}
                    >
                        <Icon iconName='AlarmClock' />
                    </Action>
                </Actions>
            </TimeAndActions>
        );
    }

    return (
        <Row key={item.id} className='row' onClick={() => props.onClick(item)}>
            {renderIcon()}
            <Body>
                <Title className='title'>{title}</Title>
                <Details>
                    <Description>{description}</Description>
                    <HashTags tags={tags} />
                </Details>
            </Body>
            {renderTimeAndActions()}
        </Row>
    );
}

export default Notifications;
