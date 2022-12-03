import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Empty, EmptyProps } from './Empty';
import { BaseComponentDriver } from 'testing-base';

export class EmptyDriver extends BaseComponentDriver {
    private props: Partial<EmptyProps> = {};

    constructor() {
        super('Empty');
    }

    when: any = {
        rendered: () => {
            render(<Empty {...(this.props as EmptyProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Empty {...(this.props as EmptyProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<EmptyProps>) => {
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
