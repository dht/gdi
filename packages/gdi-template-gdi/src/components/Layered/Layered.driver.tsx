import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Layered, LayeredProps } from './Layered';
import { BaseComponentDriver } from 'testing-base';

export class LayeredDriver extends BaseComponentDriver {
    private props: Partial<LayeredProps> = {};

    constructor() {
        super('Layered');
    }

    when: any = {
        rendered: () => {
            render(<Layered {...(this.props as LayeredProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
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
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
