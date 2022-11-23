import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Device, DeviceProps } from './Device';
import { BaseComponentDriver } from 'testing-base';

export class DeviceDriver extends BaseComponentDriver {
    private props: Partial<DeviceProps> = {
    };

    constructor() {
        super('Device');
    }

    when: any = {
        rendered: () => {
            render(<Device {...(this.props as DeviceProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Device {...(this.props as DeviceProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DeviceProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
