import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DocsNext, DocsNextProps } from './DocsNext';
import { BaseComponentDriver } from 'testing-base';

export class DocsNextDriver extends BaseComponentDriver {
    private props: Partial<DocsNextProps> = {};

    constructor() {
        super('DocsNext');
    }

    when: any = {
        rendered: () => {
            render(<DocsNext {...(this.props as DocsNextProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DocsNext {...(this.props as DocsNextProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DocsNextProps>) => {
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
