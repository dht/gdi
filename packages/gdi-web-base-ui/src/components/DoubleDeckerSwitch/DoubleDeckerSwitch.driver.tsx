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
            fireEvent.click(this.wrapper);
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
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
