import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Layered, LayeredProps } from './Layered';
import { BaseComponentDriver } from 'testing-base';

export class LayeredDriver extends BaseComponentDriver {
    private props: Partial<LayeredProps> = {
    };

    constructor() {
        super('Layered');
    }

    when: any = {
        rendered: () => {
            render(<Layered {...(this.props as LayeredProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Layered {...(this.props as LayeredProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LayeredProps>) => {
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
