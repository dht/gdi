import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Guidance, GuidanceProps } from './Guidance';
import { BaseComponentDriver } from 'testing-base';

export class GuidanceDriver extends BaseComponentDriver {
    private props: Partial<GuidanceProps> = {};

    constructor() {
        super('Guidance');
    }

    when: any = {
        rendered: () => {
            render(<Guidance {...(this.props as GuidanceProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Guidance {...(this.props as GuidanceProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<GuidanceProps>) => {
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
