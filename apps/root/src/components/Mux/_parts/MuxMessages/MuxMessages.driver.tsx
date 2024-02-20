import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxMessages, MuxMessagesProps } from './MuxMessages';
import { BaseComponentDriver } from 'testing-base';

export class MuxMessagesDriver extends BaseComponentDriver {
    private props: Partial<MuxMessagesProps> = {};

    constructor() {
        super('MuxMessages');
    }

    when: any = {
        rendered: () => {
            render(<MuxMessages {...(this.props as MuxMessagesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxMessages {...(this.props as MuxMessagesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxMessagesProps>) => {
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
