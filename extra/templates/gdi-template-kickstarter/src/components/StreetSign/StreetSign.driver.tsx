import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { StreetSign, StreetSignProps } from './StreetSign';
import { BaseComponentDriver } from 'testing-base';

export class StreetSignDriver extends BaseComponentDriver {
    private props: Partial<StreetSignProps> = {};

    constructor() {
        super('StreetSign');
    }

    when: any = {
        rendered: () => {
            render(<StreetSign {...(this.props as StreetSignProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<StreetSign {...(this.props as StreetSignProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<StreetSignProps>) => {
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
