import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TabsBig, TabsBigProps } from './TabsBig';
import { BaseComponentDriver } from 'testing-base';

export class TabsBigDriver extends BaseComponentDriver {
    private props: Partial<TabsBigProps> = {};

    constructor() {
        super('TabsBig');
    }

    when: any = {
        rendered: () => {
            render(<TabsBig {...(this.props as TabsBigProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TabsBig {...(this.props as TabsBigProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TabsBigProps>) => {
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
