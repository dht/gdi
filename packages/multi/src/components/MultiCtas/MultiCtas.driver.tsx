import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MultiCtas, MultiCtasProps } from './MultiCtas';
import { BaseComponentDriver } from 'testing-base';

export class MultiCtasDriver extends BaseComponentDriver {
    private props: Partial<MultiCtasProps> = {};

    constructor() {
        super('MultiCtas');
    }

    when: any = {
        rendered: () => {
            render(<MultiCtas {...(this.props as MultiCtasProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MultiCtas {...(this.props as MultiCtasProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MultiCtasProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
