import React from 'react';
import { Wrapper } from './SyncConfig.style';

export type SyncConfigProps = {};

export function SyncConfig(_props: SyncConfigProps) {
    return (
        <Wrapper className="SyncConfig-wrapper" data-testid="SyncConfig-wrapper">
            SyncConfig
        </Wrapper>
    );
}

export default SyncConfig;
