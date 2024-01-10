import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Toolbox, ToolboxProps } from './Toolbox';
import { BaseComponentDriver } from 'testing-base';

export class ToolboxDriver extends BaseComponentDriver {
    private props: Partial<ToolboxProps> = {};

    constructor() {
        super('Toolbox');
    }

    when: any = {
        rendered: () => {
            render(<Toolbox {...(this.props as ToolboxProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Toolbox {...(this.props as ToolboxProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ToolboxProps>) => {
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
