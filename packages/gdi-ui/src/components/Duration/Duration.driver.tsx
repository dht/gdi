import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Duration, DurationProps } from './Duration';
import { BaseComponentDriver } from 'testing-base';

export class DurationDriver extends BaseComponentDriver {
    private props: Partial<DurationProps> = {};

    constructor() {
        super('Duration');
    }

    when: any = {
        rendered: () => {
            render(<Duration {...(this.props as DurationProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Duration {...(this.props as DurationProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DurationProps>) => {
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
