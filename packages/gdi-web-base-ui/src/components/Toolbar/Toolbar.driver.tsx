import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Toolbar, ToolbarProps } from './Toolbar';
import { BaseComponentDriver } from 'testing-base';

export class ToolbarDriver extends BaseComponentDriver {
    private props: Partial<ToolbarProps> = {};

    constructor() {
        super('Toolbar');
    }

    when: any = {
        rendered: () => {
            render(<Toolbar {...(this.props as ToolbarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Toolbar {...(this.props as ToolbarProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ToolbarProps>) => {
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
