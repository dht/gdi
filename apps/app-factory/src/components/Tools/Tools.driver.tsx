import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tools, ToolsProps } from './Tools';
import { BaseComponentDriver } from 'testing-base';

export class ToolsDriver extends BaseComponentDriver {
    private props: Partial<ToolsProps> = {};

    constructor() {
        super('Tools');
    }

    when: any = {
        rendered: () => {
            render(<Tools {...(this.props as ToolsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Tools {...(this.props as ToolsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ToolsProps>) => {
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
