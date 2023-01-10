import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { HudRect, HudRectProps } from './HudRect';
import { BaseComponentDriver } from 'testing-base';

export class HudRectDriver extends BaseComponentDriver {
    private props: Partial<HudRectProps> = {};

    constructor() {
        super('HudRect');
    }

    when: any = {
        rendered: () => {
            render(<HudRect {...(this.props as HudRectProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<HudRect {...(this.props as HudRectProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<HudRectProps>) => {
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
