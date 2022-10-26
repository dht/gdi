import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SquareSummary, SquareSummaryProps } from './SquareSummary';
import { BaseComponentDriver } from 'testing-base';

export class SquareSummaryDriver extends BaseComponentDriver {
    private props: Partial<SquareSummaryProps> = {};

    constructor() {
        super('SquareSummary');
    }

    when: any = {
        rendered: () => {
            render(<SquareSummary {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<SquareSummaryProps>) => {
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
