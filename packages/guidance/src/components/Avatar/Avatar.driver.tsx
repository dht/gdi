import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Avatar, AvatarProps } from './Avatar';
import { BaseComponentDriver } from 'testing-base';

export class AvatarDriver extends BaseComponentDriver {
    private props: Partial<AvatarProps> = {};

    constructor() {
        super('Avatar');
    }

    when: any = {
        rendered: () => {
            render(<Avatar {...(this.props as AvatarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
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
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
