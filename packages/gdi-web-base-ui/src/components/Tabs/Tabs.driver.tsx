import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tabs, TabsProps } from './Tabs';
import { BaseComponentDriver } from 'testing-base';

export class TabsDriver extends BaseComponentDriver {
    private props: Partial<TabsProps> = {};

    constructor() {
        super('Tabs');
    }

    when: any = {
        rendered: () => {
            render(<Tabs {...(this.props as TabsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Tabs {...(this.props as TabsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TabsProps>) => {
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
