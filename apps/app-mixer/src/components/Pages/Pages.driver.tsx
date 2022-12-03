import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Pages, PagesProps } from './Pages';
import { BaseComponentDriver } from 'testing-base';

export class PagesDriver extends BaseComponentDriver {
    private props: Partial<PagesProps> = {};

    constructor() {
        super('Pages');
    }

    when: any = {
        rendered: () => {
            render(<Pages {...(this.props as PagesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Pages {...(this.props as PagesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PagesProps>) => {
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
