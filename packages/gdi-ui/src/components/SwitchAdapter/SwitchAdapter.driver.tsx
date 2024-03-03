import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SwitchAdapter, SwitchAdapterProps } from './SwitchAdapter';
import { BaseComponentDriver } from 'testing-base';

export class SwitchAdapterDriver extends BaseComponentDriver {
    private props: Partial<SwitchAdapterProps> = {};

    constructor() {
        super('SwitchAdapter');
    }

    when: any = {
        rendered: () => {
            render(<SwitchAdapter {...(this.props as SwitchAdapterProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<SwitchAdapter {...(this.props as SwitchAdapterProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SwitchAdapterProps>) => {
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
