import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Divider, DividerProps } from './Divider';
import { BaseComponentDriver } from 'testing-base';

export class DividerDriver extends BaseComponentDriver {
    private props: Partial<DividerProps> = {
    };

    constructor() {
        super('Divider');
    }

    when: any = {
        rendered: () => {
            render(<Divider {...(this.props as DividerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Divider {...(this.props as DividerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DividerProps>) => {
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
