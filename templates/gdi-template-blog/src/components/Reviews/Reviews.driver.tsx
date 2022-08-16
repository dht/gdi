import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Reviews, ReviewsProps } from './Reviews';
import { BaseComponentDriver } from 'testing-base';

export class ReviewsDriver extends BaseComponentDriver {
    private props: Partial<ReviewsProps> = {
    };

    constructor() {
        super('Reviews');
    }

    when: any = {
        rendered: () => {
            render(<Reviews {...(this.props as ReviewsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Reviews {...(this.props as ReviewsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ReviewsProps>) => {
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
