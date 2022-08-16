import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ColorPicker, ColorPickerProps } from './ColorPicker';
import { BaseComponentDriver } from 'testing-base';

export class ColorPickerDriver extends BaseComponentDriver {
    private props: Partial<ColorPickerProps> = {};

    constructor() {
        super('ColorPicker');
    }

    when: any = {
        rendered: () => {
            render(<ColorPicker {...(this.props as ColorPickerProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ColorPickerProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
    };
}
