import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Dropdown, DropdownProps } from './Dropdown';
import { BaseComponentDriver } from 'testing-base';

export class DropdownDriver extends BaseComponentDriver {
    private props: Partial<DropdownProps> = {};

    constructor() {
        super('Dropdown');
    }

    when: any = {
        rendered: () => {
            render(<Dropdown {...(this.props as DropdownProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<DropdownProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
