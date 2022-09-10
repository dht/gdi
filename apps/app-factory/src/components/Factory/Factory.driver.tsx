import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Factory, FactoryProps } from './Factory';
import { BaseComponentDriver } from 'testing-base';

export class FactoryDriver extends BaseComponentDriver {
    private props: Partial<FactoryProps> = {
    };

    constructor() {
        super('Factory');
    }

    when: any = {
        rendered: () => {
            render(<Factory {...(this.props as FactoryProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Factory {...(this.props as FactoryProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FactoryProps>) => {
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
