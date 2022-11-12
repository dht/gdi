import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UserBarMobile, UserBarMobileProps } from './UserBarMobile';
import { BaseComponentDriver } from 'testing-base';

export class UserBarMobileDriver extends BaseComponentDriver {
    private props: Partial<UserBarMobileProps> = {};

    constructor() {
        super('UserBarMobile');
    }

    when: any = {
        rendered: () => {
            render(<UserBarMobile {...(this.props as UserBarMobileProps)} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<UserBarMobileProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
    };
}
