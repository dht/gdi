import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BusinessWheel, BusinessWheelProps } from './BusinessWheel';
import { BaseComponentDriver } from 'testing-base';

export class BusinessWheelDriver extends BaseComponentDriver {
    private props: Partial<BusinessWheelProps> = {};

    constructor() {
        super('BusinessWheel');
    }

    when: any = {
        rendered: () => {
            render(<BusinessWheel {...(this.props as BusinessWheelProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BusinessWheel {...(this.props as BusinessWheelProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BusinessWheelProps>) => {
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
