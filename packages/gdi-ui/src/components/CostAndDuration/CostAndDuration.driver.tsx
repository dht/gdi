import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CostAndDuration, CostAndDurationProps } from './CostAndDuration';
import { BaseComponentDriver } from 'testing-base';

export class CostAndDurationDriver extends BaseComponentDriver {
    private props: Partial<CostAndDurationProps> = {};

    constructor() {
        super('CostAndDuration');
    }

    when: any = {
        rendered: () => {
            render(<CostAndDuration {...(this.props as CostAndDurationProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CostAndDuration {...(this.props as CostAndDurationProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CostAndDurationProps>) => {
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
