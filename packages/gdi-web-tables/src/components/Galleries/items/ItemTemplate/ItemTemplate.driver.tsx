import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemTemplate, ItemTemplateProps } from './ItemTemplate';
import { BaseComponentDriver } from 'testing-base';

export class ItemTemplateDriver extends BaseComponentDriver {
    private props: Partial<ItemTemplateProps> = {};

    constructor() {
        super('ItemTemplate');
    }

    when: any = {
        rendered: () => {
            render(<ItemTemplate {...(this.props as ItemTemplateProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ItemTemplate {...(this.props as ItemTemplateProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ItemTemplateProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
