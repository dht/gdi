import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MultiInbox, MultiInboxProps } from './MultiInbox';
import { BaseComponentDriver } from 'testing-base';

export class MultiInboxDriver extends BaseComponentDriver {
    private props: Partial<MultiInboxProps> = {};

    constructor() {
        super('MultiInbox');
    }

    when: any = {
        rendered: () => {
            render(<MultiInbox {...(this.props as MultiInboxProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MultiInbox {...(this.props as MultiInboxProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MultiInboxProps>) => {
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
