import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
    DoubleDeckerSwitch,
    DoubleDeckerSwitchProps,
} from './DoubleDeckerSwitch';
import { BaseComponentDriver } from 'testing-base';

export class DoubleDeckerSwitchDriver extends BaseComponentDriver {
    private props: Partial<DoubleDeckerSwitchProps> = {};

    constructor() {
        super('DoubleDeckerSwitch');
    }

    when: any = {
        rendered: () => {
            render(
                <DoubleDeckerSwitch
                    {...(this.props as DoubleDeckerSwitchProps)}
                />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <DoubleDeckerSwitch
                    {...(this.props as DoubleDeckerSwitchProps)}
                />
            );
        },
    };

    given: any = {
        props: (props: Partial<DoubleDeckerSwitchProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
