import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MultiTrack, MultiTrackProps } from './MultiTrack';
import { BaseComponentDriver } from 'testing-base';

export class MultiTrackDriver extends BaseComponentDriver {
    private props: Partial<MultiTrackProps> = {};

    constructor() {
        super('MultiTrack');
    }

    when: any = {
        rendered: () => {
            render(<MultiTrack {...(this.props as MultiTrackProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MultiTrack {...(this.props as MultiTrackProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MultiTrackProps>) => {
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
