import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Wrapper, WrapperProps } from './Wrapper';
import { BaseComponentDriver } from 'testing-base';

export class WrapperDriver extends BaseComponentDriver {
    private props: Partial<WrapperProps> = {
    };

    constructor() {
        super('Wrapper');
    }

    when: any = {
        rendered: () => {
            render(<Wrapper {...(this.props as WrapperProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Wrapper {...(this.props as WrapperProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<WrapperProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
