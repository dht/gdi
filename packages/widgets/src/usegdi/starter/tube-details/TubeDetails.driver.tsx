import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TubeDetails, TubeDetailsProps } from './TubeDetails';
import { BaseComponentDriver } from 'testing-base';

export class TubeDetailsDriver extends BaseComponentDriver {
    private props: Partial<TubeDetailsProps> = {};

    constructor() {
        super('TubeDetails');
    }

    when: any = {
        rendered: () => {
            render(<TubeDetails {...(this.props as TubeDetailsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TubeDetails {...(this.props as TubeDetailsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TubeDetailsProps>) => {
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
