import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Speaker, SpeakerProps } from './Speaker';
import { BaseComponentDriver } from 'testing-base';

export class SpeakerDriver extends BaseComponentDriver {
    private props: Partial<SpeakerProps> = {};

    constructor() {
        super('Speaker');
    }

    when: any = {
        rendered: () => {
            render(<Speaker {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<SpeakerProps>) => {
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
