import React from 'react';
import { Wrapper } from './BlockInfo.style';

export type BlockInfoProps = {};

export function BlockInfo(_props: BlockInfoProps) {
    return (
        <Wrapper className="BlockInfo-wrapper" data-testid="BlockInfo-wrapper">
            BlockInfo
        </Wrapper>
    );
}

export default BlockInfo;
