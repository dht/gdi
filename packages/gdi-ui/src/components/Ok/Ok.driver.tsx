import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Ok, OkProps } from './Ok';
import { BaseComponentDriver } from 'testing-base';

export class OkDriver extends BaseComponentDriver {
    private props: Partial<OkProps> = {};

    constructor() {
        super('Ok');
    }

    when: any = {
        rendered: () => {
            render(<Ok {...(this.props as OkProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Ok {...(this.props as OkProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<OkProps>) => {
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
