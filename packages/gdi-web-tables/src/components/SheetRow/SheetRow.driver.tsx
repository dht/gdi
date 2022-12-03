import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SheetRow, SheetRowProps } from './SheetRow';
import { BaseComponentDriver } from 'testing-base';

export class SheetRowDriver extends BaseComponentDriver {
    private props: Partial<SheetRowProps> = {};

    constructor() {
        super('SheetRow');
    }

    when: any = {
        rendered: () => {
            render(<SheetRow {...(this.props as SheetRowProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <SheetRow {...(this.props as SheetRowProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<SheetRowProps>) => {
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
