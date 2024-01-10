import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemPicker, ItemPickerProps } from './ItemPicker';
import { BaseComponentDriver } from 'testing-base';

export class ItemPickerDriver extends BaseComponentDriver {
    private props: Partial<ItemPickerProps> = {};

    constructor() {
        super('ItemPicker');
    }

    when: any = {
        rendered: () => {
            render(<ItemPicker {...(this.props as ItemPickerProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ItemPicker {...(this.props as ItemPickerProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ItemPickerProps>) => {
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
