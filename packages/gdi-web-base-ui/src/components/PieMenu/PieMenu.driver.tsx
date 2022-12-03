import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PieMenu, PieMenuProps } from './PieMenu';
import { BaseComponentDriver } from 'testing-base';

export class PieMenuDriver extends BaseComponentDriver {
    private props: Partial<PieMenuProps> = {};

    constructor() {
        super('PieMenu');
    }

    when: any = {
        rendered: () => {
            render(<PieMenu {...(this.props as PieMenuProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PieMenu {...(this.props as PieMenuProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PieMenuProps>) => {
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
