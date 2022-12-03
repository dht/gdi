import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BarSelect, BarSelectProps } from './BarSelect';
import { BaseComponentDriver } from 'testing-base';

export class BarSelectDriver extends BaseComponentDriver {
    private props: Partial<BarSelectProps> = {};

    constructor() {
        super('BarSelect');
    }

    when: any = {
        rendered: () => {
            render(<BarSelect {...(this.props as BarSelectProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<BarSelectProps>) => {
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
