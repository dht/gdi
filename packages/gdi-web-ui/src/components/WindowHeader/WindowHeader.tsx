import { Icon } from '@gdi/web-base-ui';
import React from 'react';
import { useLocalStorage } from 'react-use';
import { Actions, Wrapper, Title } from './WindowHeader.style';

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
        <Wrapper
            className='WindowHeader-wrapper'
            data-testid='WindowHeader-wrapper'
        >
            <Title>{title}</Title>
            <Actions>
                <Icon className='icon' iconName='info' onClick={alert} />
                <Icon className='icon' iconName='cancel' onClick={onClose} />
            </Actions>
        </Wrapper>
    );
}

export default WindowHeader;
