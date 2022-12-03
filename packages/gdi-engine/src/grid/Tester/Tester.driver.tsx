import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tester, TesterProps } from './Tester';
import { BaseComponentDriver } from 'testing-base';

export class TesterDriver extends BaseComponentDriver {
    private props: Partial<TesterProps> = {};

    constructor() {
        super('Tester');
    }

    when: any = {
        rendered: () => {
            render(<Tester {...(this.props as TesterProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Tester {...(this.props as TesterProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TesterProps>) => {
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
