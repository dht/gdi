import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { HudLine, HudLineProps } from './HudLine';
import { BaseComponentDriver } from 'testing-base';

export class HudLineDriver extends BaseComponentDriver {
    private props: Partial<HudLineProps> = {};

    constructor() {
        super('HudLine');
    }

    when: any = {
        rendered: () => {
            render(<HudLine {...(this.props as HudLineProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<HudLine {...(this.props as HudLineProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<HudLineProps>) => {
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
