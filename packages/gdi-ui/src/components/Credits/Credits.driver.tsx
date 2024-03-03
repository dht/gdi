import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Credits, CreditsProps } from './Credits';
import { BaseComponentDriver } from 'testing-base';

export class CreditsDriver extends BaseComponentDriver {
    private props: Partial<CreditsProps> = {};

    constructor() {
        super('Credits');
    }

    when: any = {
        rendered: () => {
            render(<Credits {...(this.props as CreditsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Credits {...(this.props as CreditsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CreditsProps>) => {
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
