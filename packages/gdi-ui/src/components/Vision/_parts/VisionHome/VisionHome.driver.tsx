import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VisionHome, VisionHomeProps } from './VisionHome';
import { BaseComponentDriver } from 'testing-base';

export class VisionHomeDriver extends BaseComponentDriver {
    private props: Partial<VisionHomeProps> = {};

    constructor() {
        super('VisionHome');
    }

    when: any = {
        rendered: () => {
            render(<VisionHome {...(this.props as VisionHomeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<VisionHome {...(this.props as VisionHomeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VisionHomeProps>) => {
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
