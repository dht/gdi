import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Keyframes, KeyframesProps } from './Keyframes';
import { BaseComponentDriver } from 'testing-base';

export class KeyframesDriver extends BaseComponentDriver {
    private props: Partial<KeyframesProps> = {};

    constructor() {
        super('Keyframes');
    }

    when: any = {
        rendered: () => {
            render(<Keyframes {...(this.props as KeyframesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Keyframes {...(this.props as KeyframesProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<KeyframesProps>) => {
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
