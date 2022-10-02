import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemWidget, ItemWidgetProps } from './ItemWidget';
import { BaseComponentDriver } from 'testing-base';

export class ItemWidgetDriver extends BaseComponentDriver {
    private props: Partial<ItemWidgetProps> = {
    };

    constructor() {
        super('ItemWidget');
    }

    when: any = {
        rendered: () => {
            render(<ItemWidget {...(this.props as ItemWidgetProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ItemWidget {...(this.props as ItemWidgetProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ItemWidgetProps>) => {
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
