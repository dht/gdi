import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RunLocally, RunLocallyProps } from './RunLocally';
import { BaseComponentDriver } from 'testing-base';

export class RunLocallyDriver extends BaseComponentDriver {
    private props: Partial<RunLocallyProps> = {};

    constructor() {
        super('RunLocally');
    }

    when: any = {
        rendered: () => {
            render(<RunLocally {...(this.props as RunLocallyProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<RunLocally {...(this.props as RunLocallyProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<RunLocallyProps>) => {
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
