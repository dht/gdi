import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Percent, PercentProps } from './Percent';
import { BaseComponentDriver } from 'testing-base';

export class PercentDriver extends BaseComponentDriver {
    private props: Partial<PercentProps> = {};

    constructor() {
        super('Percent');
    }

    when: any = {
        rendered: () => {
            render(<Percent {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<PercentProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
