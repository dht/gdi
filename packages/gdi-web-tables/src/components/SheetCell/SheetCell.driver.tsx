import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SheetCell, SheetCellProps } from './SheetCell';
import { BaseComponentDriver } from 'testing-base';

export class SheetCellDriver extends BaseComponentDriver {
    private props: Partial<SheetCellProps> = {};

    constructor() {
        super('SheetCell');
    }

    when: any = {
        rendered: () => {
            render(<SheetCell {...(this.props as SheetCellProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <SheetCell {...(this.props as SheetCellProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<SheetCellProps>) => {
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
