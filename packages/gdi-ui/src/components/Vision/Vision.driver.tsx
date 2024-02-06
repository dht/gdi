import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Vision, VisionProps } from './Vision';
import { BaseComponentDriver } from 'testing-base';

export class VisionDriver extends BaseComponentDriver {
    private props: Partial<VisionProps> = {};

    constructor() {
        super('Vision');
    }

    when: any = {
        rendered: () => {
            render(<Vision {...(this.props as VisionProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Vision {...(this.props as VisionProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VisionProps>) => {
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
