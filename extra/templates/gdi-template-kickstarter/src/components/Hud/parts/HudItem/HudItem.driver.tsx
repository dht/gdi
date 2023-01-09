import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { HudItem, HudItemProps } from './HudItem';
import { BaseComponentDriver } from 'testing-base';

export class HudItemDriver extends BaseComponentDriver {
    private props: Partial<HudItemProps> = {};

    constructor() {
        super('HudItem');
    }

    when: any = {
        rendered: () => {
            render(<HudItem {...(this.props as HudItemProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<HudItem {...(this.props as HudItemProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<HudItemProps>) => {
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
