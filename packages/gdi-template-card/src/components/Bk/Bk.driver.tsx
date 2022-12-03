import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Bk, BkProps } from './Bk';
import { BaseComponentDriver } from 'testing-base';

export class BkDriver extends BaseComponentDriver {
    private props: Partial<BkProps> = {};

    constructor() {
        super('Bk');
    }

    when: any = {
        rendered: () => {
            render(<Bk {...(this.props as BkProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Bk {...(this.props as BkProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BkProps>) => {
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
