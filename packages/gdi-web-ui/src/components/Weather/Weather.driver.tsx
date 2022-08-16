import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Weather, WeatherProps } from './Weather';
import { BaseComponentDriver } from 'testing-base';

export class WeatherDriver extends BaseComponentDriver {
    private props: Partial<WeatherProps> = {};

    constructor() {
        super('Weather');
    }

    when: any = {
        rendered: () => {
            render(<Weather {...(this.props as WeatherProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<WeatherProps>) => {
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
