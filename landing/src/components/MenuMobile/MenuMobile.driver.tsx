import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MenuMobile, MenuMobileProps } from './MenuMobile';
import { BaseComponentDriver } from 'testing-base';

export class MenuMobileDriver extends BaseComponentDriver {
    private props: Partial<MenuMobileProps> = {};

    constructor() {
        super('MenuMobile');
    }

    when: any = {
        rendered: () => {
            render(<MenuMobile {...(this.props as MenuMobileProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MenuMobile {...(this.props as MenuMobileProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MenuMobileProps>) => {
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
