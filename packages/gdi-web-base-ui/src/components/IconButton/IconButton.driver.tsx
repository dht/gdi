import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { IconButton, IconButtonProps } from './IconButton';
import { BaseComponentDriver } from 'testing-base';

export class IconButtonDriver extends BaseComponentDriver {
    private props: Partial<IconButtonProps> = {};

    constructor() {
        super('IconButton');
    }

    when: any = {
        rendered: () => {
            render(<IconButton {...(this.props as IconButtonProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <IconButton {...(this.props as IconButtonProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<IconButtonProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
