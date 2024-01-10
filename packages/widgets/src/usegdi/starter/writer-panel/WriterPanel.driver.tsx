import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { WriterPanel, WriterPanelProps } from './WriterPanel';
import { BaseComponentDriver } from 'testing-base';

export class WriterPanelDriver extends BaseComponentDriver {
    private props: Partial<WriterPanelProps> = {};

    constructor() {
        super('WriterPanel');
    }

    when: any = {
        rendered: () => {
            render(<WriterPanel {...(this.props as WriterPanelProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<WriterPanel {...(this.props as WriterPanelProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<WriterPanelProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
