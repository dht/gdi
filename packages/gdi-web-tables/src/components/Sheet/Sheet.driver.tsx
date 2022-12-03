import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Sheet, SheetProps } from './Sheet';
import { BaseComponentDriver } from 'testing-base';

export class SheetDriver extends BaseComponentDriver {
    private props: Partial<SheetProps> = {};

    constructor() {
        super('Sheet');
    }

    when: any = {
        rendered: () => {
            render(<Sheet {...(this.props as SheetProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Sheet {...(this.props as SheetProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SheetProps>) => {
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
