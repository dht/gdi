import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BarMobile, BarMobileProps } from './BarMobile';
import { BaseComponentDriver } from 'testing-base';

export class BarMobileDriver extends BaseComponentDriver {
    private props: Partial<BarMobileProps> = {};

    constructor() {
        super('BarMobile');
    }

    when: any = {
        rendered: () => {
            render(<BarMobile {...(this.props as BarMobileProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BarMobile {...(this.props as BarMobileProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BarMobileProps>) => {
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
