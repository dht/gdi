import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PplDetails, PplDetailsProps } from './PplDetails';
import { BaseComponentDriver } from 'testing-base';

export class PplDetailsDriver extends BaseComponentDriver {
    private props: Partial<PplDetailsProps> = {};

    constructor() {
        super('PplDetails');
    }

    when: any = {
        rendered: () => {
            render(<PplDetails {...(this.props as PplDetailsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PplDetails {...(this.props as PplDetailsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PplDetailsProps>) => {
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
