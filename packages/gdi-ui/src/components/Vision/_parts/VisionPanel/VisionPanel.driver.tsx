import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VisionPanel, VisionPanelProps } from './VisionPanel';
import { BaseComponentDriver } from 'testing-base';

export class VisionPanelDriver extends BaseComponentDriver {
    private props: Partial<VisionPanelProps> = {};

    constructor() {
        super('VisionPanel');
    }

    when: any = {
        rendered: () => {
            render(<VisionPanel {...(this.props as VisionPanelProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<VisionPanel {...(this.props as VisionPanelProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VisionPanelProps>) => {
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
