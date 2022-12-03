import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SheetCellSelected, SheetCellSelectedProps } from './SheetCellSelected';
import { BaseComponentDriver } from 'testing-base';

export class SheetCellSelectedDriver extends BaseComponentDriver {
    private props: Partial<SheetCellSelectedProps> = {};

    constructor() {
        super('SheetCellSelected');
    }

    when: any = {
        rendered: () => {
            render(
                <SheetCellSelected
                    {...(this.props as SheetCellSelectedProps)}
                />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <SheetCellSelected
                    {...(this.props as SheetCellSelectedProps)}
                />
            );
        },
    };

    given: any = {
        props: (props: Partial<SheetCellSelectedProps>) => {
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
