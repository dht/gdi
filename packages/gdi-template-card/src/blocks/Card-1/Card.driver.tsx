import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Card, CardProps } from './Card';
import { BaseComponentDriver } from 'testing-base';

export class CardDriver extends BaseComponentDriver {
    private props: Partial<CardProps> = {};

    constructor() {
        super('Card');
    }

    when: any = {
        rendered: () => {
            render(<Card {...(this.props as CardProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Card {...(this.props as CardProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CardProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
