import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Overview, OverviewProps } from './Overview';
import { BaseComponentDriver } from 'testing-base';

export class OverviewDriver extends BaseComponentDriver {
    private props: Partial<OverviewProps> = {};

    constructor() {
        super('Overview');
    }

    when: any = {
        rendered: () => {
            render(<Overview {...(this.props as OverviewProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <Overview {...(this.props as OverviewProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<OverviewProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
