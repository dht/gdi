import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ElementEdit, ElementEditProps } from './ElementEdit';
import { BaseComponentDriver } from 'testing-base';

export class ElementEditDriver extends BaseComponentDriver {
    private props: Partial<ElementEditProps> = {
    };

    constructor() {
        super('ElementEdit');
    }

    when: any = {
        rendered: () => {
            render(<ElementEdit {...(this.props as ElementEditProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ElementEdit {...(this.props as ElementEditProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ElementEditProps>) => {
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
