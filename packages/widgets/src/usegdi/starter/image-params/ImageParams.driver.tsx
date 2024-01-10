import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ImageParams, ImageParamsProps } from './ImageParams';
import { BaseComponentDriver } from 'testing-base';

export class ImageParamsDriver extends BaseComponentDriver {
    private props: Partial<ImageParamsProps> = {};

    constructor() {
        super('ImageParams');
    }

    when: any = {
        rendered: () => {
            render(<ImageParams {...(this.props as ImageParamsProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ImageParams {...(this.props as ImageParamsProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ImageParamsProps>) => {
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
