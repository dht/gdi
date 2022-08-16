import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SidePanel, SidePanelProps } from './SidePanel';
import { BaseComponentDriver } from 'testing-base';

export class SidePanelDriver extends BaseComponentDriver {
    private props: Partial<SidePanelProps> = {
    };

    constructor() {
        super('SidePanel');
    }

    when: any = {
        rendered: () => {
            render(<SidePanel {...(this.props as SidePanelProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<SidePanel {...(this.props as SidePanelProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SidePanelProps>) => {
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
