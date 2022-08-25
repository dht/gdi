import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Menu, MenuProps } from './Menu';
import { BaseComponentDriver } from 'testing-base';

export class MenuDriver extends BaseComponentDriver {
    private props: Partial<MenuProps> = {
    };

    constructor() {
        super('Menu');
    }

    when: any = {
        rendered: () => {
            render(<Menu {...(this.props as MenuProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Menu {...(this.props as MenuProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MenuProps>) => {
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
