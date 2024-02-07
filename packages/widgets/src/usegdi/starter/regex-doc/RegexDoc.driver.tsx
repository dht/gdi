import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RegexDoc, RegexDocProps } from './RegexDoc';
import { BaseComponentDriver } from 'testing-base';

export class RegexDocDriver extends BaseComponentDriver {
    private props: Partial<RegexDocProps> = {};

    constructor() {
        super('RegexDoc');
    }

    when: any = {
        rendered: () => {
            render(<RegexDoc {...(this.props as RegexDocProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<RegexDoc {...(this.props as RegexDocProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<RegexDocProps>) => {
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
