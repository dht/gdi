import React from 'react';
import { Wrapper } from './VisionButton.style';

export type VisionButtonProps = {};

export function VisionButton(_props: VisionButtonProps) {
    return (
        <Wrapper className="VisionButton-wrapper" data-testid="VisionButton-wrapper">
            VisionButton
        </Wrapper>
    );
}

export default VisionButton;
