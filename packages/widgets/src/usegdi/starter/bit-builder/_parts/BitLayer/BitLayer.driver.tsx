import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BitLayer, BitLayerProps } from './BitLayer';
import { BaseComponentDriver } from 'testing-base';

export class BitLayerDriver extends BaseComponentDriver {
    private props: Partial<BitLayerProps> = {};

    constructor() {
        super('BitLayer');
    }

    when: any = {
        rendered: () => {
            render(<BitLayer {...(this.props as BitLayerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BitLayer {...(this.props as BitLayerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BitLayerProps>) => {
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
