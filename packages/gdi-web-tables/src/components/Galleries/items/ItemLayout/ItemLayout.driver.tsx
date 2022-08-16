import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemLayout, ItemLayoutProps } from './ItemLayout';
import { BaseComponentDriver } from 'testing-base';

export class ItemLayoutDriver extends BaseComponentDriver {
    private props: Partial<ItemLayoutProps> = {
    };

    constructor() {
        super('ItemLayout');
    }

    when: any = {
        rendered: () => {
            render(<ItemLayout {...(this.props as ItemLayoutProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ItemLayout {...(this.props as ItemLayoutProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ItemLayoutProps>) => {
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
