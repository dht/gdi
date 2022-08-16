import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Palette, PaletteProps } from './Palette';
import { BaseComponentDriver } from 'testing-base';

export class PaletteDriver extends BaseComponentDriver {
    private props: Partial<PaletteProps> = {
    };

    constructor() {
        super('Palette');
    }

    when: any = {
        rendered: () => {
            render(<Palette {...(this.props as PaletteProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Palette {...(this.props as PaletteProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PaletteProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
