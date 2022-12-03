import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Typography, TypographyProps } from './Typography';
import { BaseComponentDriver } from 'testing-base';

export class TypographyDriver extends BaseComponentDriver {
    private props: Partial<TypographyProps> = {};

    constructor() {
        super('Typography');
    }

    when: any = {
        rendered: () => {
            render(<Typography {...(this.props as TypographyProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Typography {...(this.props as TypographyProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<TypographyProps>) => {
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
