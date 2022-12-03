import React from 'react';
import { Wrapper } from './Content.style';

export type ContentProps = {};

export function Content(_props: ContentProps) {
    return (
        <Wrapper className='Content-wrapper' data-testid='Content-wrapper'>
            Content
        </Wrapper>
    );
}

export default Content;
