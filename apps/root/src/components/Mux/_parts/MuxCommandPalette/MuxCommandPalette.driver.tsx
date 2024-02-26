import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxCommandPalette, MuxCommandPaletteProps } from './MuxCommandPalette';
import { BaseComponentDriver } from 'testing-base';

export class MuxCommandPaletteDriver extends BaseComponentDriver {
    private props: Partial<MuxCommandPaletteProps> = {};

    constructor() {
        super('MuxCommandPalette');
    }

    when: any = {
        rendered: () => {
            render(<MuxCommandPalette {...(this.props as MuxCommandPaletteProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxCommandPalette {...(this.props as MuxCommandPaletteProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxCommandPaletteProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
