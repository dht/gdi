import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MenuLinks, MenuLinksProps } from './MenuLinks';
import { BaseComponentDriver } from 'testing-base';

export class MenuLinksDriver extends BaseComponentDriver {
    private props: Partial<MenuLinksProps> = {};

    constructor() {
        super('MenuLinks');
    }

    when: any = {
        rendered: () => {
            render(<MenuLinks {...(this.props as MenuLinksProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MenuLinks {...(this.props as MenuLinksProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MenuLinksProps>) => {
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
