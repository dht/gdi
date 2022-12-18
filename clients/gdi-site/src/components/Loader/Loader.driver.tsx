import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Loader, LoaderProps } from './Loader';
import { BaseComponentDriver } from 'testing-base';

export class LoaderDriver extends BaseComponentDriver {
    private props: Partial<LoaderProps> = {};

    constructor() {
        super('Loader');
    }

    when: any = {
        rendered: () => {
            render(<Loader {...(this.props as LoaderProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Loader {...(this.props as LoaderProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LoaderProps>) => {
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
