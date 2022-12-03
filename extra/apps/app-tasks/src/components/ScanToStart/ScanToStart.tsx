import React from 'react';
import { Block, Wrapper, Text, Sync } from './ScanToStart.style';
import { Icon } from '@gdi/web-ui';

export type ScanToStartProps = {
    callbacks: {
        onSync: () => void;
    };
};

export function ScanToStart(props: ScanToStartProps) {
    return (
        <Wrapper
            className='ScanToStart-wrapper'
            data-testid='ScanToStart-wrapper'
        >
            <Sync onClick={props.callbacks.onSync}>
                <i className='material-icons'>autorenew</i>
            </Sync>
            <Block>
                <Text>Scan a task to start a session</Text>
                <Icon className='icon' iconName='GenericScan' />
            </Block>
        </Wrapper>
    );
}

export default ScanToStart;
