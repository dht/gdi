import React from 'react';
import { Container } from './PreviewLead.style';

export type PreviewLeadProps = {};

export function PreviewLead(_props: PreviewLeadProps) {
    return (
        <Container className="PreviewLead-container" data-testid="PreviewLead-container">
            PreviewLead
        </Container>
    );
}

export default PreviewLead;
