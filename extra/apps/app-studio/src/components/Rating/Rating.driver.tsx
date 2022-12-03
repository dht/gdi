import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Rating, RatingProps } from './Rating';
import { BaseComponentDriver } from 'testing-base';

export class RatingDriver extends BaseComponentDriver {
    private props: Partial<RatingProps> = {};

    constructor() {
        super('Rating');
    }

    when: any = {
        rendered: () => {
            render(<Rating {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<RatingProps>) => {
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
