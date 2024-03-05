import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SupplyKeys, SupplyKeysProps } from './SupplyKeys';
import { BaseComponentDriver } from 'testing-base';

export class SupplyKeysDriver extends BaseComponentDriver {
    private props: Partial<SupplyKeysProps> = {};

    constructor() {
        super('SupplyKeys');
    }

    when: any = {
        rendered: () => {
            render(<SupplyKeys {...(this.props as SupplyKeysProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<SupplyKeys {...(this.props as SupplyKeysProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SupplyKeysProps>) => {
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
