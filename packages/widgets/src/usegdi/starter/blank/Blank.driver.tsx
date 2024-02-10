import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Blank, BlankProps } from './Blank';
import { BaseComponentDriver } from 'testing-base';

export class BlankDriver extends BaseComponentDriver {
    private props: Partial<BlankProps> = {};

    constructor() {
        super('Blank');
    }

    when: any = {
        rendered: () => {
            render(<Blank {...(this.props as BlankProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Blank {...(this.props as BlankProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BlankProps>) => {
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
