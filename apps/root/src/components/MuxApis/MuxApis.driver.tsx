import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxApis, MuxApisProps } from './MuxApis';
import { BaseComponentDriver } from 'testing-base';

export class MuxApisDriver extends BaseComponentDriver {
    private props: Partial<MuxApisProps> = {};

    constructor() {
        super('MuxApis');
    }

    when: any = {
        rendered: () => {
            render(<MuxApis {...(this.props as MuxApisProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxApis {...(this.props as MuxApisProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxApisProps>) => {
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
