import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Legend, LegendProps } from './Legend';
import { BaseComponentDriver } from 'testing-base';

export class LegendDriver extends BaseComponentDriver {
    private props: Partial<LegendProps> = {};

    constructor() {
        super('Legend');
    }

    when: any = {
        rendered: () => {
            render(<Legend {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<LegendProps>) => {
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
