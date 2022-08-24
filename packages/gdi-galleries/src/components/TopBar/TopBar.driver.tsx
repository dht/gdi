import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TopBar, TopBarProps } from './TopBar';
import { BaseComponentDriver } from 'testing-base';

export class TopBarDriver extends BaseComponentDriver {
    private props: Partial<TopBarProps> = {
    };

    constructor() {
        super('TopBar');
    }

    when: any = {
        rendered: () => {
            render(<TopBar {...(this.props as TopBarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TopBar {...(this.props as TopBarProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TopBarProps>) => {
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
