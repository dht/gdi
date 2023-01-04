import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ToggleCards, ToggleCardsProps } from './ToggleCards';
import { BaseComponentDriver } from 'testing-base';

export class ToggleCardsDriver extends BaseComponentDriver {
    private props: Partial<ToggleCardsProps> = {};

    constructor() {
        super('ToggleCards');
    }

    when: any = {
        rendered: () => {
            render(<ToggleCards {...(this.props as ToggleCardsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ToggleCards {...(this.props as ToggleCardsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ToggleCardsProps>) => {
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
