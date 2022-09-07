import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LayoutFlow, LayoutFlowProps } from './LayoutFlow';
import { BaseComponentDriver } from 'testing-base';

export class LayoutFlowDriver extends BaseComponentDriver {
    private props: Partial<LayoutFlowProps> = {
    };

    constructor() {
        super('LayoutFlow');
    }

    when: any = {
        rendered: () => {
            render(<LayoutFlow {...(this.props as LayoutFlowProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<LayoutFlow {...(this.props as LayoutFlowProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LayoutFlowProps>) => {
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
