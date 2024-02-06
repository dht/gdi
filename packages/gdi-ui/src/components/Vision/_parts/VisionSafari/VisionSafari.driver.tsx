import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VisionSafari, VisionSafariProps } from './VisionSafari';
import { BaseComponentDriver } from 'testing-base';

export class VisionSafariDriver extends BaseComponentDriver {
    private props: Partial<VisionSafariProps> = {};

    constructor() {
        super('VisionSafari');
    }

    when: any = {
        rendered: () => {
            render(<VisionSafari {...(this.props as VisionSafariProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<VisionSafari {...(this.props as VisionSafariProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VisionSafariProps>) => {
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
