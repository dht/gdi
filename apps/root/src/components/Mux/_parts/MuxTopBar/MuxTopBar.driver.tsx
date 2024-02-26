import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxTopBar, MuxTopBarProps } from './MuxTopBar';
import { BaseComponentDriver } from 'testing-base';

export class MuxTopBarDriver extends BaseComponentDriver {
    private props: Partial<MuxTopBarProps> = {};

    constructor() {
        super('MuxTopBar');
    }

    when: any = {
        rendered: () => {
            render(<MuxTopBar {...(this.props as MuxTopBarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxTopBar {...(this.props as MuxTopBarProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxTopBarProps>) => {
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
