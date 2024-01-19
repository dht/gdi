import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Cost, CostProps } from './Cost';
import { BaseComponentDriver } from 'testing-base';

export class CostDriver extends BaseComponentDriver {
    private props: Partial<CostProps> = {};

    constructor() {
        super('Cost');
    }

    when: any = {
        rendered: () => {
            render(<Cost {...(this.props as CostProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Cost {...(this.props as CostProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CostProps>) => {
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
