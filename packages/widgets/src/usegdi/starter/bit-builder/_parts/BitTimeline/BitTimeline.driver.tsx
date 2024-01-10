import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BitTimeline, BitTimelineProps } from './BitTimeline';
import { BaseComponentDriver } from 'testing-base';

export class BitTimelineDriver extends BaseComponentDriver {
    private props: Partial<BitTimelineProps> = {};

    constructor() {
        super('BitTimeline');
    }

    when: any = {
        rendered: () => {
            render(<BitTimeline {...(this.props as BitTimelineProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BitTimeline {...(this.props as BitTimelineProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BitTimelineProps>) => {
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
