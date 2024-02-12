import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TubeTop, TubeTopProps } from './TubeTop';
import { BaseComponentDriver } from 'testing-base';

export class TubeTopDriver extends BaseComponentDriver {
    private props: Partial<TubeTopProps> = {};

    constructor() {
        super('TubeTop');
    }

    when: any = {
        rendered: () => {
            render(<TubeTop {...(this.props as TubeTopProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TubeTop {...(this.props as TubeTopProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TubeTopProps>) => {
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
