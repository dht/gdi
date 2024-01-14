import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BigPlayButton, BigPlayButtonProps } from './BigPlayButton';
import { BaseComponentDriver } from 'testing-base';

export class BigPlayButtonDriver extends BaseComponentDriver {
    private props: Partial<BigPlayButtonProps> = {};

    constructor() {
        super('BigPlayButton');
    }

    when: any = {
        rendered: () => {
            render(<BigPlayButton {...(this.props as BigPlayButtonProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BigPlayButton {...(this.props as BigPlayButtonProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BigPlayButtonProps>) => {
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
