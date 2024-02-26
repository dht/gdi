import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxFocus, MuxFocusProps } from './MuxFocus';
import { BaseComponentDriver } from 'testing-base';

export class MuxFocusDriver extends BaseComponentDriver {
    private props: Partial<MuxFocusProps> = {};

    constructor() {
        super('MuxFocus');
    }

    when: any = {
        rendered: () => {
            render(<MuxFocus {...(this.props as MuxFocusProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxFocus {...(this.props as MuxFocusProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxFocusProps>) => {
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
