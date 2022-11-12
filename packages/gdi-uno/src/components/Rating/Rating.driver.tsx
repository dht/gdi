import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Rating, RatingProps } from './Rating';
import { BaseComponentDriver } from 'testing-base';

export class RatingDriver extends BaseComponentDriver {
    private props: Partial<RatingProps> = {
    };

    constructor() {
        super('Rating');
    }

    when: any = {
        rendered: () => {
            render(<Rating {...(this.props as RatingProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Rating {...(this.props as RatingProps)} />);
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
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
