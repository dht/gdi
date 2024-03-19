import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ReadFocus, ReadFocusProps } from './ReadFocus';
import { BaseComponentDriver } from 'testing-base';

export class ReadFocusDriver extends BaseComponentDriver {
    private props: Partial<ReadFocusProps> = {};

    constructor() {
        super('ReadFocus');
    }

    when: any = {
        rendered: () => {
            render(<ReadFocus {...(this.props as ReadFocusProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ReadFocus {...(this.props as ReadFocusProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ReadFocusProps>) => {
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
