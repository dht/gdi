import React from 'react';
import { Container } from './PreviewCampaign.style';

export type PreviewCampaignProps = {};

export function PreviewCampaign(_props: PreviewCampaignProps) {
    return (
        <Container className="PreviewCampaign-container" data-testid="PreviewCampaign-container">
            PreviewCampaign
        </Container>
    );
}

export default PreviewCampaign;
