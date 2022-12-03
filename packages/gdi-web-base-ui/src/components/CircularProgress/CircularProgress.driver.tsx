import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CircularProgress, CircularProgressProps } from './CircularProgress';
import { BaseComponentDriver } from 'testing-base';

export class CircularProgressDriver extends BaseComponentDriver {
    private props: Partial<CircularProgressProps> = {};

    constructor() {
        super('CircularProgress');
    }

    when: any = {
        rendered: () => {
            render(
                <CircularProgress {...(this.props as CircularProgressProps)} />
            );
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <CircularProgress {...(this.props as CircularProgressProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<CircularProgressProps>) => {
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
