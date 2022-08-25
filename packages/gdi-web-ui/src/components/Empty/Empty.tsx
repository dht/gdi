import { Icon } from '@gdi/web-base-ui';
import React from 'react';
import { Container, Message } from './Empty.style';

export type EmptyProps = {
    message?: string;
    withIcon?: boolean;
    iconName?: string;
};

export function Empty(props: EmptyProps) {
    const {
        message = 'no items',
        iconName = 'CheckListText',
        withIcon,
    } = props;

    return (
        <Container className='Empty-container' data-testid='Empty-container'>
            {withIcon && <Icon iconName={iconName} />}
            <Message>{message}</Message>
        </Container>
    );
}

export default Empty;
