import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MenuButton, MenuButtonProps } from './MenuButton';
import { BaseComponentDriver } from 'testing-base';

export class MenuButtonDriver extends BaseComponentDriver {
    private props: Partial<MenuButtonProps> = {};

    constructor() {
        super('MenuButton');
    }

    when: any = {
        rendered: () => {
            render(<MenuButton {...(this.props as MenuButtonProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <MenuButton {...(this.props as MenuButtonProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<MenuButtonProps>) => {
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
