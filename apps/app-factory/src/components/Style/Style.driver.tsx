import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Style, StyleProps } from './Style';
import { BaseComponentDriver } from 'testing-base';

export class StyleDriver extends BaseComponentDriver {
    private props: Partial<StyleProps> = {};

    constructor() {
        super('Style');
    }

    when: any = {
        rendered: () => {
            render(<Style {...(this.props as StyleProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Style {...(this.props as StyleProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<StyleProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        wrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
