import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BitBuilder, BitBuilderProps } from './BitBuilder';
import { BaseComponentDriver } from 'testing-base';

export class BitBuilderDriver extends BaseComponentDriver {
    private props: Partial<BitBuilderProps> = {};

    constructor() {
        super('BitBuilder');
    }

    when: any = {
        rendered: () => {
            render(<BitBuilder {...(this.props as BitBuilderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BitBuilder {...(this.props as BitBuilderProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BitBuilderProps>) => {
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
