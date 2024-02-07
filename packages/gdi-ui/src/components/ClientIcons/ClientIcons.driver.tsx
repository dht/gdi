import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ClientIcons, ClientIconsProps } from './ClientIcons';
import { BaseComponentDriver } from 'testing-base';

export class ClientIconsDriver extends BaseComponentDriver {
    private props: Partial<ClientIconsProps> = {};

    constructor() {
        super('ClientIcons');
    }

    when: any = {
        rendered: () => {
            render(<ClientIcons {...(this.props as ClientIconsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ClientIcons {...(this.props as ClientIconsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ClientIconsProps>) => {
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
