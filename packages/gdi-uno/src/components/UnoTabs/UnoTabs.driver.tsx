import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UnoTabs, UnoTabsProps } from './UnoTabs';
import { BaseComponentDriver } from 'testing-base';

export class UnoTabsDriver extends BaseComponentDriver {
    private props: Partial<UnoTabsProps> = {};

    constructor() {
        super('UnoTabs');
    }

    when: any = {
        rendered: () => {
            render(<UnoTabs {...(this.props as UnoTabsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<UnoTabs {...(this.props as UnoTabsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<UnoTabsProps>) => {
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
