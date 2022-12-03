import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemTicket, ItemTicketProps } from './ItemTicket';
import { BaseComponentDriver } from 'testing-base';

export class ItemTicketDriver extends BaseComponentDriver {
    private props: Partial<ItemTicketProps> = {};

    constructor() {
        super('ItemTicket');
    }

    when: any = {
        rendered: () => {
            render(<ItemTicket {...(this.props as ItemTicketProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ItemTicket {...(this.props as ItemTicketProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ItemTicketProps>) => {
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
