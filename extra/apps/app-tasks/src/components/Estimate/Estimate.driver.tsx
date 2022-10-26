import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Estimate, EstimateProps } from './Estimate';
import { BaseComponentDriver } from 'testing-base';

export class EstimateDriver extends BaseComponentDriver {
    private props: Partial<EstimateProps> = {};

    constructor() {
        super('Estimate');
    }

    when: any = {
        rendered: () => {
            render(<Estimate {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<EstimateProps>) => {
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
