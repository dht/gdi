import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Theme, ThemeProps } from './Theme';
import { BaseComponentDriver } from 'testing-base';

export class ThemeDriver extends BaseComponentDriver {
    private props: Partial<ThemeProps> = {};

    constructor() {
        super('Theme');
    }

    when: any = {
        rendered: () => {
            render(<Theme {...(this.props as ThemeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Theme {...(this.props as ThemeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ThemeProps>) => {
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
