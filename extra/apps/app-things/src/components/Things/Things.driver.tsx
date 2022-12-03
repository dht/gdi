import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Things, ThingsProps } from './Things';
import { BaseComponentDriver } from 'testing-base';

export class ThingsDriver extends BaseComponentDriver {
    private props: Partial<ThingsProps> = {};

    constructor() {
        super('Things');
    }

    when: any = {
        rendered: () => {
            render(<Things {...(this.props as ThingsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Things {...(this.props as ThingsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ThingsProps>) => {
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
