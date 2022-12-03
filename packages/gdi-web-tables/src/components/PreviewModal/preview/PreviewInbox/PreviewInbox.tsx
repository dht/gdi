import React from 'react';
import { Wrapper } from './PreviewInbox.style';

export type PreviewInboxProps = {};

export function PreviewInbox(_props: PreviewInboxProps) {
    return (
        <Wrapper
            className='PreviewInbox-wrapper'
            data-testid='PreviewInbox-wrapper'
        >
            PreviewInbox
        </Wrapper>
    );
}

export default PreviewInbox;
