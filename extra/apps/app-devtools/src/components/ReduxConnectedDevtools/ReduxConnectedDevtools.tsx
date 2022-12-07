import React from 'react';
import { Wrapper } from './ReduxConnectedDevtools.style';
import { DevtoolsApp } from 'redux-connected-devtools';

export type ReduxConnectedDevtoolsProps = {
    connectedStore: any;
};

export function ReduxConnectedDevtools(props: ReduxConnectedDevtoolsProps) {
    const { connectedStore } = props;

    return (
        <Wrapper
            className='ReduxConnectedDevtools-wrapper'
            data-testid='ReduxConnectedDevtools-wrapper'
        >
            <DevtoolsApp isDarkMode={true} connectedStore={connectedStore} />
        </Wrapper>
    );
}

export default ReduxConnectedDevtools;
