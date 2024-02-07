import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Regex, RegexProps } from './Regex';
import { BaseComponentDriver } from 'testing-base';

export class RegexDriver extends BaseComponentDriver {
    private props: Partial<RegexProps> = {};

    constructor() {
        super('Regex');
    }

    when: any = {
        rendered: () => {
            render(<Regex {...(this.props as RegexProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Regex {...(this.props as RegexProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<RegexProps>) => {
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
