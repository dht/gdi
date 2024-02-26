import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxContextBar, MuxContextBarProps } from './MuxContextBar';
import { BaseComponentDriver } from 'testing-base';

export class MuxContextBarDriver extends BaseComponentDriver {
    private props: Partial<MuxContextBarProps> = {};

    constructor() {
        super('MuxContextBar');
    }

    when: any = {
        rendered: () => {
            render(<MuxContextBar {...(this.props as MuxContextBarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxContextBar {...(this.props as MuxContextBarProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxContextBarProps>) => {
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
