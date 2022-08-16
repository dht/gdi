import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Code, CodeProps } from './Code';
import { BaseComponentDriver } from 'testing-base';

export class CodeDriver extends BaseComponentDriver {
    private props: Partial<CodeProps> = {
    };

    constructor() {
        super('Code');
    }

    when: any = {
        rendered: () => {
            render(<Code {...(this.props as CodeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Code {...(this.props as CodeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CodeProps>) => {
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
