import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tdd, TddProps } from './Tdd';
import { BaseComponentDriver } from 'testing-base';

export class TddDriver extends BaseComponentDriver {
    private props: Partial<TddProps> = {};

    constructor() {
        super('Tdd');
    }

    when: any = {
        rendered: () => {
            render(<Tdd {...(this.props as TddProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Tdd {...(this.props as TddProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TddProps>) => {
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
