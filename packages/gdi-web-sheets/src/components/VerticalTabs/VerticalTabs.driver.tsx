import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VerticalTabs, VerticalTabsProps } from './VerticalTabs';
import { BaseComponentDriver } from 'testing-base';

export class VerticalTabsDriver extends BaseComponentDriver {
    private props: Partial<VerticalTabsProps> = {
    };

    constructor() {
        super('VerticalTabs');
    }

    when: any = {
        rendered: () => {
            render(<VerticalTabs {...(this.props as VerticalTabsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<VerticalTabs {...(this.props as VerticalTabsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<VerticalTabsProps>) => {
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
