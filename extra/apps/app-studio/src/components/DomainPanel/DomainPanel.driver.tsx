import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DomainPanel, DomainPanelProps } from './DomainPanel';
import { BaseComponentDriver } from 'testing-base';

export class DomainPanelDriver extends BaseComponentDriver {
    private props: Partial<DomainPanelProps> = {};

    constructor() {
        super('DomainPanel');
    }

    when: any = {
        rendered: () => {
            render(<DomainPanel {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<DomainPanelProps>) => {
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
