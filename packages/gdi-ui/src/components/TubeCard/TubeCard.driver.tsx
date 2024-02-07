import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TubeCard, TubeCardProps } from './TubeCard';
import { BaseComponentDriver } from 'testing-base';

export class TubeCardDriver extends BaseComponentDriver {
    private props: Partial<TubeCardProps> = {};

    constructor() {
        super('TubeCard');
    }

    when: any = {
        rendered: () => {
            render(<TubeCard {...(this.props as TubeCardProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<TubeCard {...(this.props as TubeCardProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TubeCardProps>) => {
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
