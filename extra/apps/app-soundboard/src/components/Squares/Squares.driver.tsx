import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Squares, SquaresProps } from './Squares';
import { BaseComponentDriver } from 'testing-base';

export class SquaresDriver extends BaseComponentDriver {
    private props: Partial<SquaresProps> = {};

    constructor() {
        super('Squares');
    }

    when: any = {
        rendered: () => {
            render(<Squares {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<SquaresProps>) => {
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
