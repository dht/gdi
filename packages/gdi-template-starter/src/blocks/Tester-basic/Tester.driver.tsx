import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tester, TesterProps } from './Tester';
import { BaseComponentDriver } from 'testing-base';

export class TesterDriver extends BaseComponentDriver {
    private props: Partial<TesterProps> = {
    };

    constructor() {
        super('Tester');
    }

    when: any = {
        rendered: () => {
            render(<Tester {...(this.props as TesterProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
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
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
