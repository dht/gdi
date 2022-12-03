import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ElementView, ElementViewProps } from './ElementView';
import { BaseComponentDriver } from 'testing-base';

export class ElementViewDriver extends BaseComponentDriver {
    private props: Partial<ElementViewProps> = {};

    constructor() {
        super('ElementView');
    }

    when: any = {
        rendered: () => {
            render(<ElementView {...(this.props as ElementViewProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ElementView {...(this.props as ElementViewProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ElementViewProps>) => {
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
