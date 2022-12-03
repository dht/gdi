import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FactoryPanel, FactoryPanelProps } from './FactoryPanel';
import { BaseComponentDriver } from 'testing-base';

export class FactoryPanelDriver extends BaseComponentDriver {
    private props: Partial<FactoryPanelProps> = {};

    constructor() {
        super('FactoryPanel');
    }

    when: any = {
        rendered: () => {
            render(<FactoryPanel {...(this.props as FactoryPanelProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <FactoryPanel {...(this.props as FactoryPanelProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<FactoryPanelProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        wrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
