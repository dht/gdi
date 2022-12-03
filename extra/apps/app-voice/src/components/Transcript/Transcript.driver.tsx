import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Transcript, TranscriptProps } from './Transcript';
import { BaseComponentDriver } from 'testing-base';

export class TranscriptDriver extends BaseComponentDriver {
    private props: Partial<TranscriptProps> = {};

    constructor() {
        super('Transcript');
    }

    when: any = {
        rendered: () => {
            render(<Transcript {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<TranscriptProps>) => {
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
