import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { VoiceTop, VoiceTopProps } from './VoiceTop';
import { BaseComponentDriver } from 'testing-base';

export class VoiceTopDriver extends BaseComponentDriver {
    private props: Partial<VoiceTopProps> = {};

    constructor() {
        super('VoiceTop');
    }

    when: any = {
        rendered: () => {
            render(<VoiceTop {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<VoiceTopProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
    };
}
