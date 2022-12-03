import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SheetHeaderCell, SheetHeaderCellProps } from './SheetHeaderCell';
import { BaseComponentDriver } from 'testing-base';

export class SheetHeaderCellDriver extends BaseComponentDriver {
    private props: Partial<SheetHeaderCellProps> = {};

    constructor() {
        super('SheetHeaderCell');
    }

    when: any = {
        rendered: () => {
            render(
                <SheetHeaderCell {...(this.props as SheetHeaderCellProps)} />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <SheetHeaderCell {...(this.props as SheetHeaderCellProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<SheetHeaderCellProps>) => {
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
