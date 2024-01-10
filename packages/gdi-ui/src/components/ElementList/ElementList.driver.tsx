import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ElementList, ElementListProps } from './ElementList';
import { BaseComponentDriver } from 'testing-base';

export class ElementListDriver extends BaseComponentDriver {
    private props: Partial<ElementListProps> = {};

    constructor() {
        super('ElementList');
    }

    when: any = {
        rendered: () => {
            render(<ElementList {...(this.props as ElementListProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ElementList {...(this.props as ElementListProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ElementListProps>) => {
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
