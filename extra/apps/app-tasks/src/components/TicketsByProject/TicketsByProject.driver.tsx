import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TicketsByProject, TicketsByProjectProps } from './TicketsByProject';
import { BaseComponentDriver } from 'testing-base';

export class TicketsByProjectDriver extends BaseComponentDriver {
    private props: Partial<TicketsByProjectProps> = {};

    constructor() {
        super('TicketsByProject');
    }

    when: any = {
        rendered: () => {
            render(<TicketsByProject {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<TicketsByProjectProps>) => {
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
