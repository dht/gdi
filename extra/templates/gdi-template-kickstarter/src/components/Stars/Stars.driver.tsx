import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Stars, StarsProps } from './Stars';
import { BaseComponentDriver } from 'testing-base';

export class StarsDriver extends BaseComponentDriver {
    private props: Partial<StarsProps> = {};

    constructor() {
        super('Stars');
    }

    when: any = {
        rendered: () => {
            render(<Stars {...(this.props as StarsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Stars {...(this.props as StarsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<StarsProps>) => {
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
