import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InterestingReads, InterestingReadsProps } from './InterestingReads';
import { BaseComponentDriver } from 'testing-base';

export class InterestingReadsDriver extends BaseComponentDriver {
    private props: Partial<InterestingReadsProps> = {};

    constructor() {
        super('InterestingReads');
    }

    when: any = {
        rendered: () => {
            render(
                <InterestingReads {...(this.props as InterestingReadsProps)} />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <InterestingReads {...(this.props as InterestingReadsProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<InterestingReadsProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
