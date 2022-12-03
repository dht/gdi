import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MessageModal, MessageModalProps } from './MessageModal';
import { BaseComponentDriver } from 'testing-base';

export class MessageModalDriver extends BaseComponentDriver {
    private props: Partial<MessageModalProps> = {};

    constructor() {
        super('MessageModal');
    }

    when: any = {
        rendered: () => {
            render(<MessageModal {...(this.props as MessageModalProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <MessageModal {...(this.props as MessageModalProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<MessageModalProps>) => {
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
