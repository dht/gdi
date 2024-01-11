import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CopyClip, CopyClipProps } from './CopyClip';
import { BaseComponentDriver } from 'testing-base';

export class CopyClipDriver extends BaseComponentDriver {
    private props: Partial<CopyClipProps> = {};

    constructor() {
        super('CopyClip');
    }

    when: any = {
        rendered: () => {
            render(<CopyClip {...(this.props as CopyClipProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<CopyClip {...(this.props as CopyClipProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<CopyClipProps>) => {
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
