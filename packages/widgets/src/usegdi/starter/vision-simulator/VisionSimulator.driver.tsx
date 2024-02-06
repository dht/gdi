import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VisionSimulator, VisionSimulatorProps } from './VisionSimulator';
import { BaseComponentDriver } from 'testing-base';

export class VisionSimulatorDriver extends BaseComponentDriver {
    private props: Partial<VisionSimulatorProps> = {};

    constructor() {
        super('VisionSimulator');
    }

    when: any = {
        rendered: () => {
            render(<VisionSimulator {...(this.props as VisionSimulatorProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<VisionSimulator {...(this.props as VisionSimulatorProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VisionSimulatorProps>) => {
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
