import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { IconGrid, IconGridProps } from './IconGrid';
import { BaseComponentDriver } from 'testing-base';

export class IconGridDriver extends BaseComponentDriver {
    private props: Partial<IconGridProps> = {};

    constructor() {
        super('IconGrid');
    }

    when: any = {
        rendered: () => {
            render(<IconGrid {...(this.props as IconGridProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<IconGrid {...(this.props as IconGridProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<IconGridProps>) => {
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
