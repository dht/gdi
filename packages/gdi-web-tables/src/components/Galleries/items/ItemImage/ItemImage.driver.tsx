import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemImage, ItemImageProps } from './ItemImage';
import { BaseComponentDriver } from 'testing-base';

export class ItemImageDriver extends BaseComponentDriver {
    private props: Partial<ItemImageProps> = {};

    constructor() {
        super('ItemImage');
    }

    when: any = {
        rendered: () => {
            render(<ItemImage {...(this.props as ItemImageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ItemImage {...(this.props as ItemImageProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ItemImageProps>) => {
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
