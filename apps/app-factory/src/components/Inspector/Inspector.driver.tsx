import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Inspector, InspectorProps } from './Inspector';
import { BaseComponentDriver } from 'testing-base';

export class InspectorDriver extends BaseComponentDriver {
    private props: Partial<InspectorProps> = {
    };

    constructor() {
        super('Inspector');
    }

    when: any = {
        rendered: () => {
            render(<Inspector {...(this.props as InspectorProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Inspector {...(this.props as InspectorProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<InspectorProps>) => {
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
