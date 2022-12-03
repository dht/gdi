import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemCampaign, ItemCampaignProps } from './ItemCampaign';
import { BaseComponentDriver } from 'testing-base';

export class ItemCampaignDriver extends BaseComponentDriver {
    private props: Partial<ItemCampaignProps> = {};

    constructor() {
        super('ItemCampaign');
    }

    when: any = {
        rendered: () => {
            render(<ItemCampaign {...(this.props as ItemCampaignProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ItemCampaign {...(this.props as ItemCampaignProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ItemCampaignProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
