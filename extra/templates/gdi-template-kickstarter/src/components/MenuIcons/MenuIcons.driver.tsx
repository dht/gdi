import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MenuIcons, MenuIconsProps } from './MenuIcons';
import { BaseComponentDriver } from 'testing-base';

export class MenuIconsDriver extends BaseComponentDriver {
    private props: Partial<MenuIconsProps> = {};

    constructor() {
        super('MenuIcons');
    }

    when: any = {
        rendered: () => {
            render(<MenuIcons {...(this.props as MenuIconsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MenuIcons {...(this.props as MenuIconsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MenuIconsProps>) => {
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
