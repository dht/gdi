import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Movement, MovementProps } from './Movement';
import { BaseComponentDriver } from 'testing-base';

export class MovementDriver extends BaseComponentDriver {
    private props: Partial<MovementProps> = {};

    constructor() {
        super('Movement');
    }

    when: any = {
        rendered: () => {
            render(<Movement {...(this.props as MovementProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Movement {...(this.props as MovementProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MovementProps>) => {
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
