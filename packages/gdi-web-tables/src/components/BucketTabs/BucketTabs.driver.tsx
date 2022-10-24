import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BucketTabs, BucketTabsProps } from './BucketTabs';
import { BaseComponentDriver } from 'testing-base';

export class BucketTabsDriver extends BaseComponentDriver {
    private props: Partial<BucketTabsProps> = {
    };

    constructor() {
        super('BucketTabs');
    }

    when: any = {
        rendered: () => {
            render(<BucketTabs {...(this.props as BucketTabsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BucketTabs {...(this.props as BucketTabsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BucketTabsProps>) => {
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
