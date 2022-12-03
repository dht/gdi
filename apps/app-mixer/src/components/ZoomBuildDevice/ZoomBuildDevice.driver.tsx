import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ZoomBuildDevice, ZoomBuildDeviceProps } from './ZoomBuildDevice';
import { BaseComponentDriver } from 'testing-base';

export class ZoomBuildDeviceDriver extends BaseComponentDriver {
    private props: Partial<ZoomBuildDeviceProps> = {};

    constructor() {
        super('ZoomBuildDevice');
    }

    when: any = {
        rendered: () => {
            render(
                <ZoomBuildDevice {...(this.props as ZoomBuildDeviceProps)} />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ZoomBuildDevice {...(this.props as ZoomBuildDeviceProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ZoomBuildDeviceProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
