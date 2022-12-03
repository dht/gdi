import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TicketsRecent, TicketsRecentProps } from './TicketsRecent';
import { BaseComponentDriver } from 'testing-base';

export class TicketsRecentDriver extends BaseComponentDriver {
    private props: Partial<TicketsRecentProps> = {};

    constructor() {
        super('TicketsRecent');
    }

    when: any = {
        rendered: () => {
            render(<TicketsRecent {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<TicketsRecentProps>) => {
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
