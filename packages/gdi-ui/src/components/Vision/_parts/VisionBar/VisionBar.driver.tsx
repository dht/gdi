import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VisionBar, VisionBarProps } from './VisionBar';
import { BaseComponentDriver } from 'testing-base';

export class VisionBarDriver extends BaseComponentDriver {
    private props: Partial<VisionBarProps> = {};

    constructor() {
        super('VisionBar');
    }

    when: any = {
        rendered: () => {
            render(<VisionBar {...(this.props as VisionBarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<VisionBar {...(this.props as VisionBarProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VisionBarProps>) => {
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
