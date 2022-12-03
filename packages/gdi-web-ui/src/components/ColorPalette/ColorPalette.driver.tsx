import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ColorPalette, ColorPaletteProps } from './ColorPalette';
import { BaseComponentDriver } from 'testing-base';

export class ColorPaletteDriver extends BaseComponentDriver {
    private props: Partial<ColorPaletteProps> = {};

    constructor() {
        super('ColorPalette');
    }

    when: any = {
        rendered: () => {
            render(<ColorPalette {...(this.props as ColorPaletteProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ColorPalette {...(this.props as ColorPaletteProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ColorPaletteProps>) => {
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
