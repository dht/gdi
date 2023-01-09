import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Instush, InstushProps } from './Instush';
import { BaseComponentDriver } from 'testing-base';

export class InstushDriver extends BaseComponentDriver {
    private props: Partial<InstushProps> = {};

    constructor() {
        super('Instush');
    }

    when: any = {
        rendered: () => {
            render(<Instush {...(this.props as InstushProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Instush {...(this.props as InstushProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<InstushProps>) => {
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
