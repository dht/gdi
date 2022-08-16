import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Gauge, GaugeProps } from './Gauge';
import { BaseComponentDriver } from 'testing-base';

export class GaugeDriver extends BaseComponentDriver {
    private props: Partial<GaugeProps> = {};

    constructor() {
        super('Gauge');
    }

    when: any = {
        rendered: () => {
            render(<Gauge {...(this.props as GaugeProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<GaugeProps>) => {
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
