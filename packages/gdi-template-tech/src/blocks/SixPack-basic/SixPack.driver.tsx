import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SixPack, SixPackProps } from './SixPack';
import { BaseComponentDriver } from 'testing-base';

export class SixPackDriver extends BaseComponentDriver {
    private props: Partial<SixPackProps> = {};

    constructor() {
        super('SixPack');
    }

    when: any = {
        rendered: () => {
            render(<SixPack {...(this.props as SixPackProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<SixPack {...(this.props as SixPackProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SixPackProps>) => {
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
