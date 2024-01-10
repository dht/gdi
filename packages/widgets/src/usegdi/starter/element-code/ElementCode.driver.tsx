import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ElementCode, ElementCodeProps } from './ElementCode';
import { BaseComponentDriver } from 'testing-base';

export class ElementCodeDriver extends BaseComponentDriver {
    private props: Partial<ElementCodeProps> = {};

    constructor() {
        super('ElementCode');
    }

    when: any = {
        rendered: () => {
            render(<ElementCode {...(this.props as ElementCodeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ElementCode {...(this.props as ElementCodeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ElementCodeProps>) => {
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
