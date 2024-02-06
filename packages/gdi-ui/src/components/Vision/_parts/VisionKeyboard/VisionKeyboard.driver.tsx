import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VisionKeyboard, VisionKeyboardProps } from './VisionKeyboard';
import { BaseComponentDriver } from 'testing-base';

export class VisionKeyboardDriver extends BaseComponentDriver {
    private props: Partial<VisionKeyboardProps> = {};

    constructor() {
        super('VisionKeyboard');
    }

    when: any = {
        rendered: () => {
            render(<VisionKeyboard {...(this.props as VisionKeyboardProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<VisionKeyboard {...(this.props as VisionKeyboardProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VisionKeyboardProps>) => {
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
