import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TopHeader, TopHeaderProps } from './TopHeader';
import { BaseComponentDriver } from 'testing-base';

export class TopHeaderDriver extends BaseComponentDriver {
    private props: Partial<TopHeaderProps> = {};

    constructor() {
        super('TopHeader');
    }

    when: any = {
        rendered: () => {
            render(<TopHeader {...(this.props as TopHeaderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <TopHeader {...(this.props as TopHeaderProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<TopHeaderProps>) => {
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
