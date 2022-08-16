import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UserMenu, UserMenuProps } from './UserMenu';
import { BaseComponentDriver } from 'testing-base';

export class UserMenuDriver extends BaseComponentDriver {
    private props: Partial<UserMenuProps> = {
        user: {
            name: '',
            company: '',
            imageUrl: '',
        },
        items: [],
        onClick: (id: string) => {},
    };

    constructor() {
        super('UserMenu');
    }

    when: any = {
        rendered: () => {
            render(<UserMenu {...(this.props as UserMenuProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <UserMenu {...(this.props as UserMenuProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<UserMenuProps>) => {
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
