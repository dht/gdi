import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SpeakButton, SpeakButtonProps } from './SpeakButton';
import { BaseComponentDriver } from 'testing-base';

export class SpeakButtonDriver extends BaseComponentDriver {
    private props: Partial<SpeakButtonProps> = {};

    constructor() {
        super('SpeakButton');
    }

    when: any = {
        rendered: () => {
            render(<SpeakButton {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<SpeakButtonProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
    };
}
