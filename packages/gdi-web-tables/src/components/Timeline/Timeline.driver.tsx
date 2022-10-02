import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Timeline, TimelineProps } from './Timeline';
import { BaseComponentDriver } from 'testing-base';

export class TimelineDriver extends BaseComponentDriver {
    private props: Partial<TimelineProps> = {
    };

    constructor() {
        super('Timeline');
    }

    when: any = {
        rendered: () => {
            render(<Timeline {...(this.props as TimelineProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Timeline {...(this.props as TimelineProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TimelineProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
