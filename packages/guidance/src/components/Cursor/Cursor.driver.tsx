import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Cursor, CursorProps } from './Cursor';
import { BaseComponentDriver } from 'testing-base';

export class CursorDriver extends BaseComponentDriver {
    private props: Partial<CursorProps> = {};

    constructor() {
        super('Cursor');
    }

    when: any = {
        rendered: () => {
            render(<Cursor {...(this.props as CursorProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Cursor {...(this.props as CursorProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CursorProps>) => {
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
