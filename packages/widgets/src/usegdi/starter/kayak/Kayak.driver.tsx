import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Kayak, KayakProps } from './Kayak';
import { BaseComponentDriver } from 'testing-base';

export class KayakDriver extends BaseComponentDriver {
    private props: Partial<KayakProps> = {};

    constructor() {
        super('Kayak');
    }

    when: any = {
        rendered: () => {
            render(<Kayak {...(this.props as KayakProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Kayak {...(this.props as KayakProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<KayakProps>) => {
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
