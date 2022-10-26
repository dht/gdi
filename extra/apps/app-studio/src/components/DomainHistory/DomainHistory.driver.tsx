import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DomainHistory, DomainHistoryProps } from './DomainHistory';
import { BaseComponentDriver } from 'testing-base';

export class DomainHistoryDriver extends BaseComponentDriver {
    private props: Partial<DomainHistoryProps> = {};

    constructor() {
        super('DomainHistory');
    }

    when: any = {
        rendered: () => {
            render(<DomainHistory {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<DomainHistoryProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
    };
}
