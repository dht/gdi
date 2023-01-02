import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Upgrades, UpgradesProps } from './Upgrades';
import { BaseComponentDriver } from 'testing-base';

export class UpgradesDriver extends BaseComponentDriver {
    private props: Partial<UpgradesProps> = {};

    constructor() {
        super('Upgrades');
    }

    when: any = {
        rendered: () => {
            render(<Upgrades {...(this.props as UpgradesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Upgrades {...(this.props as UpgradesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<UpgradesProps>) => {
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
