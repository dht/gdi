import React from 'react';
import { Container } from './PreviewInbox.style';

export type PreviewInboxProps = {};

export function PreviewInbox(_props: PreviewInboxProps) {
    return (
        <Container className="PreviewInbox-container" data-testid="PreviewInbox-container">
            PreviewInbox
        </Container>
    );
}

export default PreviewInbox;
