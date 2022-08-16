import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SideMenu, SideMenuProps } from './SideMenu';
import { BaseComponentDriver } from 'testing-base';

export class SideMenuDriver extends BaseComponentDriver {
    private props: Partial<SideMenuProps> = {};

    constructor() {
        super('SideMenu');
    }

    when: any = {
        rendered: () => {
            render(<SideMenu {...(this.props as SideMenuProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <SideMenu {...(this.props as SideMenuProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<SideMenuProps>) => {
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
