import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuxInput, MuxInputProps } from './MuxInput';
import { BaseComponentDriver } from 'testing-base';

export class MuxInputDriver extends BaseComponentDriver {
    private props: Partial<MuxInputProps> = {};

    constructor() {
        super('MuxInput');
    }

    when: any = {
        rendered: () => {
            render(<MuxInput {...(this.props as MuxInputProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MuxInput {...(this.props as MuxInputProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MuxInputProps>) => {
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
