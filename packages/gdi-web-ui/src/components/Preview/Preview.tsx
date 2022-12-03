import React from 'react';
import { Wrapper } from './Preview.style';

export type PreviewProps = {};

export function Preview(_props: PreviewProps) {
    return (
        <Wrapper className='Preview-wrapper' data-testid='Preview-wrapper'>
            Preview
        </Wrapper>
    );
}

export default Preview;
