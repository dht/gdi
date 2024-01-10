import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Panel, PanelProps } from './Panel';
import { BaseComponentDriver } from 'testing-base';

export class PanelDriver extends BaseComponentDriver {
    private props: Partial<PanelProps> = {};

    constructor() {
        super('Panel');
    }

    when: any = {
        rendered: () => {
            render(<Panel {...(this.props as PanelProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Panel {...(this.props as PanelProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PanelProps>) => {
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
