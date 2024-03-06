import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Top, TopProps } from './Top';
import { BaseComponentDriver } from 'testing-base';

export class TopDriver extends BaseComponentDriver {
    private props: Partial<TopProps> = {};

    constructor() {
        super('Top');
    }

    when: any = {
        rendered: () => {
            render(<Top {...(this.props as TopProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Top {...(this.props as TopProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<TopProps>) => {
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
