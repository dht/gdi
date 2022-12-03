import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SheetCellEditing, SheetCellEditingProps } from './SheetCellEditing';
import { BaseComponentDriver } from 'testing-base';

export class SheetCellEditingDriver extends BaseComponentDriver {
    private props: Partial<SheetCellEditingProps> = {};

    constructor() {
        super('SheetCellEditing');
    }

    when: any = {
        rendered: () => {
            render(
                <SheetCellEditing {...(this.props as SheetCellEditingProps)} />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <SheetCellEditing {...(this.props as SheetCellEditingProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<SheetCellEditingProps>) => {
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
