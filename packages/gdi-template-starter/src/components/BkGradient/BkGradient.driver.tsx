import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BkGradient, BkGradientProps } from './BkGradient';
import { BaseComponentDriver } from 'testing-base';

export class BkGradientDriver extends BaseComponentDriver {
    private props: Partial<BkGradientProps> = {};

    constructor() {
        super('BkGradient');
    }

    when: any = {
        rendered: () => {
            render(<BkGradient {...(this.props as BkGradientProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BkGradient {...(this.props as BkGradientProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BkGradientProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        wrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
