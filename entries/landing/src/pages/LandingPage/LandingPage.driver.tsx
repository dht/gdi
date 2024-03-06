import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LandingPage, LandingPageProps } from './LandingPage';
import { BaseComponentDriver } from 'testing-base';

export class LandingPageDriver extends BaseComponentDriver {
    private props: Partial<LandingPageProps> = {};

    constructor() {
        super('LandingPage');
    }

    when: any = {
        rendered: () => {
            render(<LandingPage {...(this.props as LandingPageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<LandingPage {...(this.props as LandingPageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LandingPageProps>) => {
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
