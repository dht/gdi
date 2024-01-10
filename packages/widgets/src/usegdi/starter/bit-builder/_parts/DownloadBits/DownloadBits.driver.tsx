import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DownloadBits, DownloadBitsProps } from './DownloadBits';
import { BaseComponentDriver } from 'testing-base';

export class DownloadBitsDriver extends BaseComponentDriver {
    private props: Partial<DownloadBitsProps> = {};

    constructor() {
        super('DownloadBits');
    }

    when: any = {
        rendered: () => {
            render(<DownloadBits {...(this.props as DownloadBitsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<DownloadBits {...(this.props as DownloadBitsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<DownloadBitsProps>) => {
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
