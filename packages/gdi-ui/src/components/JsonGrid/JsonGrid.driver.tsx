import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { JsonGrid, JsonGridProps } from './JsonGrid';
import { BaseComponentDriver } from 'testing-base';

export class JsonGridDriver extends BaseComponentDriver {
    private props: Partial<JsonGridProps> = {};

    constructor() {
        super('JsonGrid');
    }

    when: any = {
        rendered: () => {
            render(<JsonGrid {...(this.props as JsonGridProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<JsonGrid {...(this.props as JsonGridProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<JsonGridProps>) => {
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
