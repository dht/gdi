import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { HudDot, HudDotProps } from './HudDot';
import { BaseComponentDriver } from 'testing-base';

export class HudDotDriver extends BaseComponentDriver {
    private props: Partial<HudDotProps> = {};

    constructor() {
        super('HudDot');
    }

    when: any = {
        rendered: () => {
            render(<HudDot {...(this.props as HudDotProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<HudDot {...(this.props as HudDotProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<HudDotProps>) => {
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
