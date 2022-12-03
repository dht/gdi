import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemPost, ItemPostProps } from './ItemPost';
import { BaseComponentDriver } from 'testing-base';

export class ItemPostDriver extends BaseComponentDriver {
    private props: Partial<ItemPostProps> = {};

    constructor() {
        super('ItemPost');
    }

    when: any = {
        rendered: () => {
            render(<ItemPost {...(this.props as ItemPostProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ItemPost {...(this.props as ItemPostProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ItemPostProps>) => {
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
