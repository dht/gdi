import React from 'react';
import { Container } from './ReduxConnectedDevtools.style';
import { DevtoolsApp } from 'redux-connected-devtools';

export type ReduxConnectedDevtoolsProps = {
    connectedStore: any;
};

export function ReduxConnectedDevtools(props: ReduxConnectedDevtoolsProps) {
    const { connectedStore } = props;

    return (
        <Container
            className='ReduxConnectedDevtools-container'
            data-testid='ReduxConnectedDevtools-container'
        >
            <DevtoolsApp idDarkMode={true} connectedStore={connectedStore} />
        </Container>
    );
}

export default ReduxConnectedDevtools;
