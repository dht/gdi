import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Dot, DotProps } from './Dot';
import { BaseComponentDriver } from 'testing-base';

export class DotDriver extends BaseComponentDriver {
    private props: Partial<DotProps> = {};

    constructor() {
        super('Dot');
    }

    when: any = {
        rendered: () => {
            render(<Dot {...(this.props as DotProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Dot {...(this.props as DotProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DotProps>) => {
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
