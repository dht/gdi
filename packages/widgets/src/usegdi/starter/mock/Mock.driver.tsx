import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Mock, MockProps } from './Mock';
import { BaseComponentDriver } from 'testing-base';

export class MockDriver extends BaseComponentDriver {
    private props: Partial<MockProps> = {};

    constructor() {
        super('Mock');
    }

    when: any = {
        rendered: () => {
            render(<Mock {...(this.props as MockProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Mock {...(this.props as MockProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MockProps>) => {
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
