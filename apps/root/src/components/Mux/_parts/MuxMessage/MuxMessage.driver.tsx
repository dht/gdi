import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxMessage, MuxMessageProps } from './MuxMessage';
import { BaseComponentDriver } from 'testing-base';

export class MuxMessageDriver extends BaseComponentDriver {
    private props: Partial<MuxMessageProps> = {};

    constructor() {
        super('MuxMessage');
    }

    when: any = {
        rendered: () => {
            render(<MuxMessage {...(this.props as MuxMessageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxMessage {...(this.props as MuxMessageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxMessageProps>) => {
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
