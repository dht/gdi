import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Twins, TwinsProps } from './Twins';
import { BaseComponentDriver } from 'testing-base';

export class TwinsDriver extends BaseComponentDriver {
    private props: Partial<TwinsProps> = {};

    constructor() {
        super('Twins');
    }

    when: any = {
        rendered: () => {
            render(<Twins {...(this.props as TwinsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Twins {...(this.props as TwinsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TwinsProps>) => {
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
