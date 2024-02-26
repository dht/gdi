import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxLogs, MuxLogsProps } from './MuxLogs';
import { BaseComponentDriver } from 'testing-base';

export class MuxLogsDriver extends BaseComponentDriver {
    private props: Partial<MuxLogsProps> = {};

    constructor() {
        super('MuxLogs');
    }

    when: any = {
        rendered: () => {
            render(<MuxLogs {...(this.props as MuxLogsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxLogs {...(this.props as MuxLogsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxLogsProps>) => {
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
