import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DemoMode, DemoModeProps } from './DemoMode';
import { BaseComponentDriver } from 'testing-base';

export class DemoModeDriver extends BaseComponentDriver {
    private props: Partial<DemoModeProps> = {};

    constructor() {
        super('DemoMode');
    }

    when: any = {
        rendered: () => {
            render(<DemoMode {...(this.props as DemoModeProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <DemoMode {...(this.props as DemoModeProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<DemoModeProps>) => {
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
