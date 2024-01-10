import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Lottie, LottieProps } from './Lottie';
import { BaseComponentDriver } from 'testing-base';

export class LottieDriver extends BaseComponentDriver {
    private props: Partial<LottieProps> = {};

    constructor() {
        super('Lottie');
    }

    when: any = {
        rendered: () => {
            render(<Lottie {...(this.props as LottieProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Lottie {...(this.props as LottieProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LottieProps>) => {
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
