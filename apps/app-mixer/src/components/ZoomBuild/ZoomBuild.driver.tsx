import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ZoomBuild, ZoomBuildProps } from './ZoomBuild';
import { BaseComponentDriver } from 'testing-base';

export class ZoomBuildDriver extends BaseComponentDriver {
    private props: Partial<ZoomBuildProps> = {};

    constructor() {
        super('ZoomBuild');
    }

    when: any = {
        rendered: () => {
            render(<ZoomBuild {...(this.props as ZoomBuildProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ZoomBuild {...(this.props as ZoomBuildProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ZoomBuildProps>) => {
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
