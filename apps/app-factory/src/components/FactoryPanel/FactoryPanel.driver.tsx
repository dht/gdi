import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FactoryPanel, FactoryPanelProps } from './FactoryPanel';
import { BaseComponentDriver } from 'testing-base';

export class FactoryPanelDriver extends BaseComponentDriver {
    private props: Partial<FactoryPanelProps> = {
    };

    constructor() {
        super('FactoryPanel');
    }

    when: any = {
        rendered: () => {
            render(<FactoryPanel {...(this.props as FactoryPanelProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<FactoryPanel {...(this.props as FactoryPanelProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<FactoryPanelProps>) => {
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
