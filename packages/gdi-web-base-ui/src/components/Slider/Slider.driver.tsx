import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Slider, SliderProps } from './Slider';
import { BaseComponentDriver } from 'testing-base';

export class SliderDriver extends BaseComponentDriver {
    private props: Partial<SliderProps> = {};

    constructor() {
        super('Slider');
    }

    when: any = {
        rendered: () => {
            render(<Slider {...(this.props as SliderProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<SliderProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
