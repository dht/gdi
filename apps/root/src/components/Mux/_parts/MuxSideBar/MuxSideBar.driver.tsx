import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxSideBar, MuxSideBarProps } from './MuxSideBar';
import { BaseComponentDriver } from 'testing-base';

export class MuxSideBarDriver extends BaseComponentDriver {
    private props: Partial<MuxSideBarProps> = {};

    constructor() {
        super('MuxSideBar');
    }

    when: any = {
        rendered: () => {
            render(<MuxSideBar {...(this.props as MuxSideBarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxSideBar {...(this.props as MuxSideBarProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxSideBarProps>) => {
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
