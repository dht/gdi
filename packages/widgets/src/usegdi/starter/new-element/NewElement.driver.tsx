import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NewElement, NewElementProps } from './NewElement';
import { BaseComponentDriver } from 'testing-base';

export class NewElementDriver extends BaseComponentDriver {
    private props: Partial<NewElementProps> = {};

    constructor() {
        super('NewElement');
    }

    when: any = {
        rendered: () => {
            render(<NewElement {...(this.props as NewElementProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<NewElement {...(this.props as NewElementProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<NewElementProps>) => {
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
