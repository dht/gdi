import React from 'react';
import { Wrapper } from './PreviewLead.style';

export type PreviewLeadProps = {};

export function PreviewLead(_props: PreviewLeadProps) {
    return (
        <Wrapper
            className='PreviewLead-wrapper'
            data-testid='PreviewLead-wrapper'
        >
            PreviewLead
        </Wrapper>
    );
}

export default PreviewLead;
