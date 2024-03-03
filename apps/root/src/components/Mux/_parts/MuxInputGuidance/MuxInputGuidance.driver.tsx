import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxInputGuidance, MuxInputGuidanceProps } from './MuxInputGuidance';
import { BaseComponentDriver } from 'testing-base';

export class MuxInputGuidanceDriver extends BaseComponentDriver {
    private props: Partial<MuxInputGuidanceProps> = {};

    constructor() {
        super('MuxInputGuidance');
    }

    when: any = {
        rendered: () => {
            render(<MuxInputGuidance {...(this.props as MuxInputGuidanceProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxInputGuidance {...(this.props as MuxInputGuidanceProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxInputGuidanceProps>) => {
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
