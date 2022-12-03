import React from 'react';
import { Wrapper } from './PreviewEvent.style';

export type PreviewEventProps = {};

export function PreviewEvent(_props: PreviewEventProps) {
    return (
        <Wrapper
            className='PreviewEvent-wrapper'
            data-testid='PreviewEvent-wrapper'
        >
            PreviewEvent
        </Wrapper>
    );
}

export default PreviewEvent;
