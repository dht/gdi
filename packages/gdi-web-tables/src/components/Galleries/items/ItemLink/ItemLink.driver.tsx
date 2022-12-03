import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemLink, ItemLinkProps } from './ItemLink';
import { BaseComponentDriver } from 'testing-base';

export class ItemLinkDriver extends BaseComponentDriver {
    private props: Partial<ItemLinkProps> = {};

    constructor() {
        super('ItemLink');
    }

    when: any = {
        rendered: () => {
            render(<ItemLink {...(this.props as ItemLinkProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ItemLink {...(this.props as ItemLinkProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ItemLinkProps>) => {
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
