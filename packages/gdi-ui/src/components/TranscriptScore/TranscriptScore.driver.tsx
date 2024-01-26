import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TranscriptScore, TranscriptScoreProps } from './TranscriptScore';
import { BaseComponentDriver } from 'testing-base';

export class TranscriptScoreDriver extends BaseComponentDriver {
    private props: Partial<TranscriptScoreProps> = {};

    constructor() {
        super('TranscriptScore');
    }

    when: any = {
        rendered: () => {
            render(<TranscriptScore {...(this.props as TranscriptScoreProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TranscriptScore {...(this.props as TranscriptScoreProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TranscriptScoreProps>) => {
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
