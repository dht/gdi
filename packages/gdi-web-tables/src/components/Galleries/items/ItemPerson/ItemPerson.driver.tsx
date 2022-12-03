import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemPerson, ItemPersonProps } from './ItemPerson';
import { BaseComponentDriver } from 'testing-base';

export class ItemPersonDriver extends BaseComponentDriver {
    private props: Partial<ItemPersonProps> = {};

    constructor() {
        super('ItemPerson');
    }

    when: any = {
        rendered: () => {
            render(<ItemPerson {...(this.props as ItemPersonProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ItemPerson {...(this.props as ItemPersonProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ItemPersonProps>) => {
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
