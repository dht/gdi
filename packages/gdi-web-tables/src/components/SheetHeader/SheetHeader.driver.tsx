import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SheetHeader, SheetHeaderProps } from './SheetHeader';
import { BaseComponentDriver } from 'testing-base';

export class SheetHeaderDriver extends BaseComponentDriver {
    private props: Partial<SheetHeaderProps> = {};

    constructor() {
        super('SheetHeader');
    }

    when: any = {
        rendered: () => {
            render(<SheetHeader {...(this.props as SheetHeaderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <SheetHeader {...(this.props as SheetHeaderProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<SheetHeaderProps>) => {
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
