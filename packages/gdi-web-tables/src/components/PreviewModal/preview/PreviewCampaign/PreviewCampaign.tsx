import React from 'react';
import { Wrapper } from './PreviewCampaign.style';

export type PreviewCampaignProps = {};

export function PreviewCampaign(_props: PreviewCampaignProps) {
    return (
        <Wrapper
            className='PreviewCampaign-wrapper'
            data-testid='PreviewCampaign-wrapper'
        >
            PreviewCampaign
        </Wrapper>
    );
}

export default PreviewCampaign;
