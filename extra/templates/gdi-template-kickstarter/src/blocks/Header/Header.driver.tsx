import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Header, HeaderProps } from './Header';
import { BaseComponentDriver } from 'testing-base';

export class HeaderDriver extends BaseComponentDriver {
    private props: Partial<HeaderProps> = {};

    constructor() {
        super('Header');
    }

    when: any = {
        rendered: () => {
            render(<Header {...(this.props as HeaderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Header {...(this.props as HeaderProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<HeaderProps>) => {
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
