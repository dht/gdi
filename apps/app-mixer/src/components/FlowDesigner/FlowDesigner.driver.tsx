import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FlowDesigner, FlowDesignerProps } from './FlowDesigner';
import { BaseComponentDriver } from 'testing-base';

export class FlowDesignerDriver extends BaseComponentDriver {
    private props: Partial<FlowDesignerProps> = {
    };

    constructor() {
        super('FlowDesigner');
    }

    when: any = {
        rendered: () => {
            render(<FlowDesigner {...(this.props as FlowDesignerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<FlowDesigner {...(this.props as FlowDesignerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FlowDesignerProps>) => {
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
