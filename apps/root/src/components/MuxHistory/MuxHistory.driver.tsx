import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxHistory, MuxHistoryProps } from './MuxHistory';
import { BaseComponentDriver } from 'testing-base';

export class MuxHistoryDriver extends BaseComponentDriver {
    private props: Partial<MuxHistoryProps> = {};

    constructor() {
        super('MuxHistory');
    }

    when: any = {
        rendered: () => {
            render(<MuxHistory {...(this.props as MuxHistoryProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxHistory {...(this.props as MuxHistoryProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxHistoryProps>) => {
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
