import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemLead, ItemLeadProps } from './ItemLead';
import { BaseComponentDriver } from 'testing-base';

export class ItemLeadDriver extends BaseComponentDriver {
    private props: Partial<ItemLeadProps> = {};

    constructor() {
        super('ItemLead');
    }

    when: any = {
        rendered: () => {
            render(<ItemLead {...(this.props as ItemLeadProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ItemLead {...(this.props as ItemLeadProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ItemLeadProps>) => {
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
