import React from 'react';
import { Block, Container, Text, Sync } from './ScanToStart.style';
import { Icon } from '@gdi/web-ui';

export type ScanToStartProps = {
    callbacks: {
        onSync: () => void;
    };
};

export function ScanToStart(props: ScanToStartProps) {
    return (
        <Container
            className='ScanToStart-container'
            data-testid='ScanToStart-container'
        >
            <Sync onClick={props.callbacks.onSync}>
                <i className='material-icons'>autorenew</i>
            </Sync>
            <Block>
                <Text>Scan a task to start a session</Text>
                <Icon className='icon' iconName='GenericScan' />
            </Block>
        </Container>
    );
}

export default ScanToStart;
