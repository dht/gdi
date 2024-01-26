import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BitPanel, BitPanelProps } from './BitPanel';
import { BaseComponentDriver } from 'testing-base';

export class BitPanelDriver extends BaseComponentDriver {
    private props: Partial<BitPanelProps> = {};

    constructor() {
        super('BitPanel');
    }

    when: any = {
        rendered: () => {
            render(<BitPanel {...(this.props as BitPanelProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BitPanel {...(this.props as BitPanelProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BitPanelProps>) => {
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
