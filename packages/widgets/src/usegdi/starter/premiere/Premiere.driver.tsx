import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Premiere, PremiereProps } from './Premiere';
import { BaseComponentDriver } from 'testing-base';

export class PremiereDriver extends BaseComponentDriver {
    private props: Partial<PremiereProps> = {};

    constructor() {
        super('Premiere');
    }

    when: any = {
        rendered: () => {
            render(<Premiere {...(this.props as PremiereProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Premiere {...(this.props as PremiereProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PremiereProps>) => {
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
