import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ScreenLoader, ScreenLoaderProps } from './ScreenLoader';
import { BaseComponentDriver } from 'testing-base';

export class ScreenLoaderDriver extends BaseComponentDriver {
    private props: Partial<ScreenLoaderProps> = {};

    constructor() {
        super('ScreenLoader');
    }

    when: any = {
        rendered: () => {
            render(<ScreenLoader {...(this.props as ScreenLoaderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ScreenLoader {...(this.props as ScreenLoaderProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ScreenLoaderProps>) => {
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
