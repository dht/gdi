import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Share, ShareProps } from './Share';
import { BaseComponentDriver } from 'testing-base';

export class ShareDriver extends BaseComponentDriver {
    private props: Partial<ShareProps> = {};

    constructor() {
        super('Share');
    }

    when: any = {
        rendered: () => {
            render(<Share {...(this.props as ShareProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<Share {...(this.props as ShareProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ShareProps>) => {
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
