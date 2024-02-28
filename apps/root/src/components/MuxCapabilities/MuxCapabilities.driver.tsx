import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxCapabilities, MuxCapabilitiesProps } from './MuxCapabilities';
import { BaseComponentDriver } from 'testing-base';

export class MuxCapabilitiesDriver extends BaseComponentDriver {
    private props: Partial<MuxCapabilitiesProps> = {};

    constructor() {
        super('MuxCapabilities');
    }

    when: any = {
        rendered: () => {
            render(<MuxCapabilities {...(this.props as MuxCapabilitiesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxCapabilities {...(this.props as MuxCapabilitiesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxCapabilitiesProps>) => {
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
