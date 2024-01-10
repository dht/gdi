import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BitTimelineItem, BitTimelineItemProps } from './BitTimelineItem';
import { BaseComponentDriver } from 'testing-base';

export class BitTimelineItemDriver extends BaseComponentDriver {
    private props: Partial<BitTimelineItemProps> = {};

    constructor() {
        super('BitTimelineItem');
    }

    when: any = {
        rendered: () => {
            render(<BitTimelineItem {...(this.props as BitTimelineItemProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BitTimelineItem {...(this.props as BitTimelineItemProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BitTimelineItemProps>) => {
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
