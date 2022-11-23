import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ZoomBuildBar, ZoomBuildBarProps } from './ZoomBuildBar';
import { BaseComponentDriver } from 'testing-base';

export class ZoomBuildBarDriver extends BaseComponentDriver {
    private props: Partial<ZoomBuildBarProps> = {
    };

    constructor() {
        super('ZoomBuildBar');
    }

    when: any = {
        rendered: () => {
            render(<ZoomBuildBar {...(this.props as ZoomBuildBarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ZoomBuildBar {...(this.props as ZoomBuildBarProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ZoomBuildBarProps>) => {
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
