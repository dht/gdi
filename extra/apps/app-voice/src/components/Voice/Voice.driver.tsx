import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Voice, VoiceProps } from './Voice';
import { BaseComponentDriver } from 'testing-base';

export class VoiceDriver extends BaseComponentDriver {
    private props: Partial<VoiceProps> = {};

    constructor() {
        super('Voice');
    }

    when: any = {
        rendered: () => {
            render(<Voice {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<VoiceProps>) => {
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
