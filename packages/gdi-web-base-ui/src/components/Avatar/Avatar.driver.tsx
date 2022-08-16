import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Avatar, AvatarProps } from './Avatar';
import { BaseComponentDriver } from 'testing-base';

export class AvatarDriver extends BaseComponentDriver {
    private props: Partial<AvatarProps> = {
        name: '',
        size: 10,
        imageUrl: '',
        color: '',
        onClick: () => {},
    };

    constructor() {
        super('Avatar');
    }

    when: any = {
        rendered: () => {
            render(<Avatar {...(this.props as AvatarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Avatar {...(this.props as AvatarProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<AvatarProps>) => {
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
