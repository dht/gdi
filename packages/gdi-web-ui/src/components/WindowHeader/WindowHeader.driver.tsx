import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { WindowHeader, WindowHeaderProps } from './WindowHeader';
import { BaseComponentDriver } from 'testing-base';

export class WindowHeaderDriver extends BaseComponentDriver {
    private props: Partial<WindowHeaderProps> = {
    };

    constructor() {
        super('WindowHeader');
    }

    when: any = {
        rendered: () => {
            render(<WindowHeader {...(this.props as WindowHeaderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<WindowHeader {...(this.props as WindowHeaderProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<WindowHeaderProps>) => {
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
