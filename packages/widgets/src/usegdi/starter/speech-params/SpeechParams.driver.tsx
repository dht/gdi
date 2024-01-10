import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SpeechParams, SpeechParamsProps } from './SpeechParams';
import { BaseComponentDriver } from 'testing-base';

export class SpeechParamsDriver extends BaseComponentDriver {
    private props: Partial<SpeechParamsProps> = {};

    constructor() {
        super('SpeechParams');
    }

    when: any = {
        rendered: () => {
            render(<SpeechParams {...(this.props as SpeechParamsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<SpeechParams {...(this.props as SpeechParamsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<SpeechParamsProps>) => {
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
