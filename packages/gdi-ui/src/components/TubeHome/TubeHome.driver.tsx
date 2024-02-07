import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TubeHome, TubeHomeProps } from './TubeHome';
import { BaseComponentDriver } from 'testing-base';

export class TubeHomeDriver extends BaseComponentDriver {
    private props: Partial<TubeHomeProps> = {};

    constructor() {
        super('TubeHome');
    }

    when: any = {
        rendered: () => {
            render(<TubeHome {...(this.props as TubeHomeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TubeHome {...(this.props as TubeHomeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TubeHomeProps>) => {
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
