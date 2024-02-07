import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tube, TubeProps } from './Tube';
import { BaseComponentDriver } from 'testing-base';

export class TubeDriver extends BaseComponentDriver {
    private props: Partial<TubeProps> = {};

    constructor() {
        super('Tube');
    }

    when: any = {
        rendered: () => {
            render(<Tube {...(this.props as TubeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Tube {...(this.props as TubeProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TubeProps>) => {
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
