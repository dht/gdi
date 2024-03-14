import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Stats, StatsProps } from './Stats';
import { BaseComponentDriver } from 'testing-base';

export class StatsDriver extends BaseComponentDriver {
    private props: Partial<StatsProps> = {};

    constructor() {
        super('Stats');
    }

    when: any = {
        rendered: () => {
            render(<Stats {...(this.props as StatsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Stats {...(this.props as StatsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<StatsProps>) => {
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
