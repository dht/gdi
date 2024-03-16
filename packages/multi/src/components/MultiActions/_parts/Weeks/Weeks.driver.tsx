import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Weeks, WeeksProps } from './Weeks';
import { BaseComponentDriver } from 'testing-base';

export class WeeksDriver extends BaseComponentDriver {
    private props: Partial<WeeksProps> = {};

    constructor() {
        super('Weeks');
    }

    when: any = {
        rendered: () => {
            render(<Weeks {...(this.props as WeeksProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Weeks {...(this.props as WeeksProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<WeeksProps>) => {
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
