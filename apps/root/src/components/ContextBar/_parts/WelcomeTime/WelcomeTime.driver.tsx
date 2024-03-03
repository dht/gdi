import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { WelcomeTime, WelcomeTimeProps } from './WelcomeTime';
import { BaseComponentDriver } from 'testing-base';

export class WelcomeTimeDriver extends BaseComponentDriver {
    private props: Partial<WelcomeTimeProps> = {};

    constructor() {
        super('WelcomeTime');
    }

    when: any = {
        rendered: () => {
            render(<WelcomeTime {...(this.props as WelcomeTimeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<WelcomeTime {...(this.props as WelcomeTimeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<WelcomeTimeProps>) => {
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
