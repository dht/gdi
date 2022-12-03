import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { WindowSize, WindowSizeProps } from './WindowSize';
import { BaseComponentDriver } from 'testing-base';

export class WindowSizeDriver extends BaseComponentDriver {
    private props: Partial<WindowSizeProps> = {};

    constructor() {
        super('WindowSize');
    }

    when: any = {
        rendered: () => {
            render(<WindowSize {...(this.props as WindowSizeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <WindowSize {...(this.props as WindowSizeProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<WindowSizeProps>) => {
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
