import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Campaigns, CampaignsProps } from './Campaigns';
import { BaseComponentDriver } from 'testing-base';

export class CampaignsDriver extends BaseComponentDriver {
    private props: Partial<CampaignsProps> = {};

    constructor() {
        super('Campaigns');
    }

    when: any = {
        rendered: () => {
            render(<Campaigns {...(this.props as CampaignsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Campaigns {...(this.props as CampaignsProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<CampaignsProps>) => {
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
