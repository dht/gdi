import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Hud, HudProps } from './Hud';
import { BaseComponentDriver } from 'testing-base';

export class HudDriver extends BaseComponentDriver {
    private props: Partial<HudProps> = {};

    constructor() {
        super('Hud');
    }

    when: any = {
        rendered: () => {
            render(<Hud {...(this.props as HudProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Hud {...(this.props as HudProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<HudProps>) => {
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
