import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Money, MoneyProps } from './Money';
import { BaseComponentDriver } from 'testing-base';

export class MoneyDriver extends BaseComponentDriver {
    private props: Partial<MoneyProps> = {};

    constructor() {
        super('Money');
    }

    when: any = {
        rendered: () => {
            render(<Money {...(this.props as MoneyProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Money {...(this.props as MoneyProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MoneyProps>) => {
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
