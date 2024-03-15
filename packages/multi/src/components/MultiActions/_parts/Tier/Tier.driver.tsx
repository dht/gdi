import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tier, TierProps } from './Tier';
import { BaseComponentDriver } from 'testing-base';

export class TierDriver extends BaseComponentDriver {
    private props: Partial<TierProps> = {};

    constructor() {
        super('Tier');
    }

    when: any = {
        rendered: () => {
            render(<Tier {...(this.props as TierProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Tier {...(this.props as TierProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TierProps>) => {
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
