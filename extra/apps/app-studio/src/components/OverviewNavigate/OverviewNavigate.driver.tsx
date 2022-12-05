import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { OverviewNavigate, OverviewNavigateProps } from './OverviewNavigate';
import { BaseComponentDriver } from 'testing-base';

export class OverviewNavigateDriver extends BaseComponentDriver {
    private props: Partial<OverviewNavigateProps> = {};

    constructor() {
        super('OverviewNavigate');
    }

    when: any = {
        rendered: () => {
            render(
                <OverviewNavigate {...(this.props as OverviewNavigateProps)} />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <OverviewNavigate {...(this.props as OverviewNavigateProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<OverviewNavigateProps>) => {
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
