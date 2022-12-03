import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ElementSelector, ElementSelectorProps } from './ElementSelector';
import { BaseComponentDriver } from 'testing-base';

export class ElementSelectorDriver extends BaseComponentDriver {
    private props: Partial<ElementSelectorProps> = {};

    constructor() {
        super('ElementSelector');
    }

    when: any = {
        rendered: () => {
            render(
                <ElementSelector {...(this.props as ElementSelectorProps)} />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ElementSelector {...(this.props as ElementSelectorProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ElementSelectorProps>) => {
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
