import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VisionButton, VisionButtonProps } from './VisionButton';
import { BaseComponentDriver } from 'testing-base';

export class VisionButtonDriver extends BaseComponentDriver {
    private props: Partial<VisionButtonProps> = {};

    constructor() {
        super('VisionButton');
    }

    when: any = {
        rendered: () => {
            render(<VisionButton {...(this.props as VisionButtonProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<VisionButton {...(this.props as VisionButtonProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VisionButtonProps>) => {
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
