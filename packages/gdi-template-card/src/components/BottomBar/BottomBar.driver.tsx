import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BottomBar, BottomBarProps } from './BottomBar';
import { BaseComponentDriver } from 'testing-base';

export class BottomBarDriver extends BaseComponentDriver {
    private props: Partial<BottomBarProps> = {
    };

    constructor() {
        super('BottomBar');
    }

    when: any = {
        rendered: () => {
            render(<BottomBar {...(this.props as BottomBarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BottomBar {...(this.props as BottomBarProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BottomBarProps>) => {
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
