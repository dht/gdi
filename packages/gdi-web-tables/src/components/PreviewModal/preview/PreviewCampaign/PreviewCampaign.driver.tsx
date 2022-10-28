import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewCampaign, PreviewCampaignProps } from './PreviewCampaign';
import { BaseComponentDriver } from 'testing-base';

export class PreviewCampaignDriver extends BaseComponentDriver {
    private props: Partial<PreviewCampaignProps> = {
    };

    constructor() {
        super('PreviewCampaign');
    }

    when: any = {
        rendered: () => {
            render(<PreviewCampaign {...(this.props as PreviewCampaignProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PreviewCampaign {...(this.props as PreviewCampaignProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PreviewCampaignProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
