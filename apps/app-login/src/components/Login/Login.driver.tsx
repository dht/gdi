import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Login, LoginProps } from './Login';
import { BaseComponentDriver } from 'testing-base';

export class LoginDriver extends BaseComponentDriver {
    private props: Partial<LoginProps> = {
        title: '',
        onClick: () => {},
    };

    constructor() {
        super('Login');
    }

    when: any = {
        rendered: () => {
            render(<Login {...(this.props as LoginProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Login {...(this.props as LoginProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LoginProps>) => {
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
