import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { OneBoardPage, OneBoardPageProps } from './OneBoardPage';
import { BaseComponentDriver } from 'testing-base';

export class OneBoardPageDriver extends BaseComponentDriver {
    private props: Partial<OneBoardPageProps> = {};

    constructor() {
        super('OneBoardPage');
    }

    when: any = {
        rendered: () => {
            render(<OneBoardPage {...(this.props as OneBoardPageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<OneBoardPage {...(this.props as OneBoardPageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<OneBoardPageProps>) => {
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
