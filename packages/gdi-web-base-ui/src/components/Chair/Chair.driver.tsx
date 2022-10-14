import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Chair, ChairProps } from './Chair';
import { BaseComponentDriver } from 'testing-base';

export class ChairDriver extends BaseComponentDriver {
    private props: Partial<ChairProps> = {
    };

    constructor() {
        super('Chair');
    }

    when: any = {
        rendered: () => {
            render(<Chair {...(this.props as ChairProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Chair {...(this.props as ChairProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ChairProps>) => {
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
