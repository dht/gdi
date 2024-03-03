import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DIY, DIYProps } from './DIY';
import { BaseComponentDriver } from 'testing-base';

export class DIYDriver extends BaseComponentDriver {
    private props: Partial<DIYProps> = {};

    constructor() {
        super('DIY');
    }

    when: any = {
        rendered: () => {
            render(<DIY {...(this.props as DIYProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DIY {...(this.props as DIYProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DIYProps>) => {
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
