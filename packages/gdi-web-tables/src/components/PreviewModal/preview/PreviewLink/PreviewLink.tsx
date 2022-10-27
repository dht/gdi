import React from 'react';
import { Container } from './PreviewLink.style';

export type PreviewLinkProps = {};

export function PreviewLink(_props: PreviewLinkProps) {
    return (
        <Container className="PreviewLink-container" data-testid="PreviewLink-container">
            PreviewLink
        </Container>
    );
}

export default PreviewLink;
