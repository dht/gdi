import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProgressBar, ProgressBarProps } from './ProgressBar';
import { BaseComponentDriver } from 'testing-base';

export class ProgressBarDriver extends BaseComponentDriver {
    private props: Partial<ProgressBarProps> = {};

    constructor() {
        super('ProgressBar');
    }

    when: any = {
        rendered: () => {
            render(<ProgressBar {...(this.props as ProgressBarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ProgressBar {...(this.props as ProgressBarProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ProgressBarProps>) => {
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
