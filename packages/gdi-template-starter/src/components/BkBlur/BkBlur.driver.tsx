import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BkBlur, BkBlurProps } from './BkBlur';
import { BaseComponentDriver } from 'testing-base';

export class BkBlurDriver extends BaseComponentDriver {
    private props: Partial<BkBlurProps> = {};

    constructor() {
        super('BkBlur');
    }

    when: any = {
        rendered: () => {
            render(<BkBlur {...(this.props as BkBlurProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BkBlur {...(this.props as BkBlurProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BkBlurProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        wrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
