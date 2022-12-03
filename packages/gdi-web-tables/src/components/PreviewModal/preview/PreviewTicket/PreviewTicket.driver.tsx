import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PreviewTicket, PreviewTicketProps } from './PreviewTicket';
import { BaseComponentDriver } from 'testing-base';

export class PreviewTicketDriver extends BaseComponentDriver {
    private props: Partial<PreviewTicketProps> = {};

    constructor() {
        super('PreviewTicket');
    }

    when: any = {
        rendered: () => {
            render(<PreviewTicket {...(this.props as PreviewTicketProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <PreviewTicket {...(this.props as PreviewTicketProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<PreviewTicketProps>) => {
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
