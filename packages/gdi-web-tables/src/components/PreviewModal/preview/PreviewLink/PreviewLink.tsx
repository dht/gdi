import React from 'react';
import { Wrapper } from './PreviewLink.style';

export type PreviewLinkProps = {};

export function PreviewLink(_props: PreviewLinkProps) {
    return (
        <Wrapper
            className='PreviewLink-wrapper'
            data-testid='PreviewLink-wrapper'
        >
            PreviewLink
        </Wrapper>
    );
}

export default PreviewLink;
