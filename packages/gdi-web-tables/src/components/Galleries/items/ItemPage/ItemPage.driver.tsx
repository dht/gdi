import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemPage, ItemPageProps } from './ItemPage';
import { BaseComponentDriver } from 'testing-base';

export class ItemPageDriver extends BaseComponentDriver {
    private props: Partial<ItemPageProps> = {};

    constructor() {
        super('ItemPage');
    }

    when: any = {
        rendered: () => {
            render(<ItemPage {...(this.props as ItemPageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ItemPage {...(this.props as ItemPageProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ItemPageProps>) => {
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
