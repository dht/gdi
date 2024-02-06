import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VisionIcon, VisionIconProps } from './VisionIcon';
import { BaseComponentDriver } from 'testing-base';

export class VisionIconDriver extends BaseComponentDriver {
    private props: Partial<VisionIconProps> = {};

    constructor() {
        super('VisionIcon');
    }

    when: any = {
        rendered: () => {
            render(<VisionIcon {...(this.props as VisionIconProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<VisionIcon {...(this.props as VisionIconProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VisionIconProps>) => {
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
