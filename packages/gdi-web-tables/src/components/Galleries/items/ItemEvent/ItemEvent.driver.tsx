import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemEvent, ItemEventProps } from './ItemEvent';
import { BaseComponentDriver } from 'testing-base';

export class ItemEventDriver extends BaseComponentDriver {
    private props: Partial<ItemEventProps> = {};

    constructor() {
        super('ItemEvent');
    }

    when: any = {
        rendered: () => {
            render(<ItemEvent {...(this.props as ItemEventProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ItemEvent {...(this.props as ItemEventProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ItemEventProps>) => {
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
