import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TabbedPages, TabbedPagesProps } from './TabbedPages';
import { BaseComponentDriver } from 'testing-base';

export class TabbedPagesDriver extends BaseComponentDriver {
    private props: Partial<TabbedPagesProps> = {};

    constructor() {
        super('TabbedPages');
    }

    when: any = {
        rendered: () => {
            render(<TabbedPages {...(this.props as TabbedPagesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TabbedPages {...(this.props as TabbedPagesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TabbedPagesProps>) => {
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
