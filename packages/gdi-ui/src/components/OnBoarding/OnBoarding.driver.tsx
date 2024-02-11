import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { OnBoarding, OnBoardingProps } from './OnBoarding';
import { BaseComponentDriver } from 'testing-base';

export class OnBoardingDriver extends BaseComponentDriver {
    private props: Partial<OnBoardingProps> = {};

    constructor() {
        super('OnBoarding');
    }

    when: any = {
        rendered: () => {
            render(<OnBoarding {...(this.props as OnBoardingProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<OnBoarding {...(this.props as OnBoardingProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<OnBoardingProps>) => {
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
