import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Spotlight, SpotlightProps } from './Spotlight';
import { BaseComponentDriver } from 'testing-base';

export class SpotlightDriver extends BaseComponentDriver {
    private props: Partial<SpotlightProps> = {};

    constructor() {
        super('Spotlight');
    }

    when: any = {
        rendered: () => {
            render(<Spotlight {...(this.props as SpotlightProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Spotlight {...(this.props as SpotlightProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SpotlightProps>) => {
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
