import { Icon } from '@gdi/web-base-ui';
import React from 'react';
import { useLocalStorage } from 'react-use';
import { Actions, Container, Title } from './WindowHeader.style';

export type WindowHeaderProps = {
    id: string;
    title: string;
};

export function WindowHeader(props: WindowHeaderProps) {
    const { id, title } = props;
    const [forceClose, setForceClose] = useLocalStorage(
        `WINDOW_HEADER_FORCE_CLOSE_${id}`,
        false
    );

    function onClose() {
        setForceClose(true);
    }

    if (forceClose) {
        return null;
    }

    return (
        <Container
            className='WindowHeader-container'
            data-testid='WindowHeader-container'
        >
            <Title>{title}</Title>
            <Actions>
                <Icon className='icon' iconName='info' onClick={alert} />
                <Icon className='icon' iconName='cancel' onClick={onClose} />
            </Actions>
        </Container>
    );
}

export default WindowHeader;
