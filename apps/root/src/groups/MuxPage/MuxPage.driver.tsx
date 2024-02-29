import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxPage, MuxPageProps } from './MuxPage';
import { BaseComponentDriver } from 'testing-base';

export class MuxPageDriver extends BaseComponentDriver {
    private props: Partial<MuxPageProps> = {};

    constructor() {
        super('MuxPage');
    }

    when: any = {
        rendered: () => {
            render(<MuxPage {...(this.props as MuxPageProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxPage {...(this.props as MuxPageProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxPageProps>) => {
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
