import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { OverviewBar, OverviewBarProps } from './OverviewBar';
import { BaseComponentDriver } from 'testing-base';

export class OverviewBarDriver extends BaseComponentDriver {
    private props: Partial<OverviewBarProps> = {};

    constructor() {
        super('OverviewBar');
    }

    when: any = {
        rendered: () => {
            render(<OverviewBar {...(this.props as OverviewBarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <OverviewBar {...(this.props as OverviewBarProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<OverviewBarProps>) => {
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
