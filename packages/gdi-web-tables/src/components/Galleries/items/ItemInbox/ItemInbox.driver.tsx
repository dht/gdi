import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemInbox, ItemInboxProps } from './ItemInbox';
import { BaseComponentDriver } from 'testing-base';

export class ItemInboxDriver extends BaseComponentDriver {
    private props: Partial<ItemInboxProps> = {};

    constructor() {
        super('ItemInbox');
    }

    when: any = {
        rendered: () => {
            render(<ItemInbox {...(this.props as ItemInboxProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ItemInbox {...(this.props as ItemInboxProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ItemInboxProps>) => {
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
