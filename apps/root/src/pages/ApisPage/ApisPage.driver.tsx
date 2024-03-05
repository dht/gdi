import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ApisPage, ApisPageProps } from './ApisPage';
import { BaseComponentDriver } from 'testing-base';

export class ApisPageDriver extends BaseComponentDriver {
    private props: Partial<ApisPageProps> = {};

    constructor() {
        super('ApisPage');
    }

    when: any = {
        rendered: () => {
            render(<ApisPage {...(this.props as ApisPageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ApisPage {...(this.props as ApisPageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ApisPageProps>) => {
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
