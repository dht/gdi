import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DotTimeline, DotTimelineProps } from './DotTimeline';
import { BaseComponentDriver } from 'testing-base';

export class DotTimelineDriver extends BaseComponentDriver {
    private props: Partial<DotTimelineProps> = {};

    constructor() {
        super('DotTimeline');
    }

    when: any = {
        rendered: () => {
            render(<DotTimeline {...(this.props as DotTimelineProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DotTimeline {...(this.props as DotTimelineProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DotTimelineProps>) => {
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
