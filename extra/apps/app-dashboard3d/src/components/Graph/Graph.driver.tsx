import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Graph, GraphProps } from './Graph';
import { BaseComponentDriver } from 'testing-base';

export class GraphDriver extends BaseComponentDriver {
    private props: Partial<GraphProps> = {
    };

    constructor() {
        super('Graph');
    }

    when: any = {
        rendered: () => {
            render(<Graph {...(this.props as GraphProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Graph {...(this.props as GraphProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<GraphProps>) => {
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
