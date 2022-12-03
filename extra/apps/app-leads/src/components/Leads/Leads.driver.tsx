import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Leads, LeadsProps } from './Leads';
import { BaseComponentDriver } from 'testing-base';

export class LeadsDriver extends BaseComponentDriver {
    private props: Partial<LeadsProps> = {};

    constructor() {
        super('Leads');
    }

    when: any = {
        rendered: () => {
            render(<Leads {...(this.props as LeadsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Leads {...(this.props as LeadsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LeadsProps>) => {
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
