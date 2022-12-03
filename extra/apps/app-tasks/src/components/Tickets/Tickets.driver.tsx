import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tickets, TicketsProps } from './Tickets';
import { BaseComponentDriver } from 'testing-base';

export class TicketsDriver extends BaseComponentDriver {
    private props: Partial<TicketsProps> = {};

    constructor() {
        super('Tickets');
    }

    when: any = {
        rendered: () => {
            render(<Tickets {...(this.props as TicketsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Tickets {...(this.props as TicketsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TicketsProps>) => {
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
