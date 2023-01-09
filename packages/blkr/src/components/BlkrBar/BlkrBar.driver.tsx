import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BlkrBar, BlkrBarProps } from './BlkrBar';
import { BaseComponentDriver } from 'testing-base';

export class BlkrBarDriver extends BaseComponentDriver {
    private props: Partial<BlkrBarProps> = {};

    constructor() {
        super('BlkrBar');
    }

    when: any = {
        rendered: () => {
            render(<BlkrBar {...(this.props as BlkrBarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BlkrBar {...(this.props as BlkrBarProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BlkrBarProps>) => {
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
