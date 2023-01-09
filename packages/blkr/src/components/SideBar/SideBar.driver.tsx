import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SideBar, SideBarProps } from './SideBar';
import { BaseComponentDriver } from 'testing-base';

export class SideBarDriver extends BaseComponentDriver {
    private props: Partial<SideBarProps> = {};

    constructor() {
        super('SideBar');
    }

    when: any = {
        rendered: () => {
            render(<SideBar {...(this.props as SideBarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<SideBar {...(this.props as SideBarProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SideBarProps>) => {
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
