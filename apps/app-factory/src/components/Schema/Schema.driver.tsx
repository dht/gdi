import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Schema, SchemaProps } from './Schema';
import { BaseComponentDriver } from 'testing-base';

export class SchemaDriver extends BaseComponentDriver {
    private props: Partial<SchemaProps> = {};

    constructor() {
        super('Schema');
    }

    when: any = {
        rendered: () => {
            render(<Schema {...(this.props as SchemaProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Schema {...(this.props as SchemaProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SchemaProps>) => {
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
