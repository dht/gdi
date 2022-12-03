import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TopMenu, TopMenuProps } from './TopMenu';
import { BaseComponentDriver } from 'testing-base';

export class TopMenuDriver extends BaseComponentDriver {
    private props: Partial<TopMenuProps> = {};

    constructor() {
        super('TopMenu');
    }

    when: any = {
        rendered: () => {
            render(<TopMenu {...(this.props as TopMenuProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TopMenu {...(this.props as TopMenuProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TopMenuProps>) => {
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
