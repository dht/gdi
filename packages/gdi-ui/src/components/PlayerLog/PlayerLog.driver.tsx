import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PlayerLog, PlayerLogProps } from './PlayerLog';
import { BaseComponentDriver } from 'testing-base';

export class PlayerLogDriver extends BaseComponentDriver {
    private props: Partial<PlayerLogProps> = {};

    constructor() {
        super('PlayerLog');
    }

    when: any = {
        rendered: () => {
            render(<PlayerLog {...(this.props as PlayerLogProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<PlayerLog {...(this.props as PlayerLogProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<PlayerLogProps>) => {
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
