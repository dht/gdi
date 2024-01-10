import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ElementPosition, ElementPositionProps } from './ElementPosition';
import { BaseComponentDriver } from 'testing-base';

export class ElementPositionDriver extends BaseComponentDriver {
    private props: Partial<ElementPositionProps> = {};

    constructor() {
        super('ElementPosition');
    }

    when: any = {
        rendered: () => {
            render(<ElementPosition {...(this.props as ElementPositionProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ElementPosition {...(this.props as ElementPositionProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ElementPositionProps>) => {
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
