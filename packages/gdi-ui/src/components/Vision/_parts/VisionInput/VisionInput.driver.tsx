import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VisionInput, VisionInputProps } from './VisionInput';
import { BaseComponentDriver } from 'testing-base';

export class VisionInputDriver extends BaseComponentDriver {
    private props: Partial<VisionInputProps> = {};

    constructor() {
        super('VisionInput');
    }

    when: any = {
        rendered: () => {
            render(<VisionInput {...(this.props as VisionInputProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<VisionInput {...(this.props as VisionInputProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VisionInputProps>) => {
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
