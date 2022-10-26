import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Ppl, PplProps } from './Ppl';
import { BaseComponentDriver } from 'testing-base';

export class PplDriver extends BaseComponentDriver {
    private props: Partial<PplProps> = {
    };

    constructor() {
        super('Ppl');
    }

    when: any = {
        rendered: () => {
            render(<Ppl {...(this.props as PplProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Ppl {...(this.props as PplProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PplProps>) => {
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
