import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Speech, SpeechProps } from './Speech';
import { BaseComponentDriver } from 'testing-base';

export class SpeechDriver extends BaseComponentDriver {
    private props: Partial<SpeechProps> = {};

    constructor() {
        super('Speech');
    }

    when: any = {
        rendered: () => {
            render(<Speech {...(this.props as SpeechProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Speech {...(this.props as SpeechProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SpeechProps>) => {
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
