import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ImageAndText, ImageAndTextProps } from './ImageAndText';
import { BaseComponentDriver } from 'testing-base';

export class ImageAndTextDriver extends BaseComponentDriver {
    private props: Partial<ImageAndTextProps> = {
    };

    constructor() {
        super('ImageAndText');
    }

    when: any = {
        rendered: () => {
            render(<ImageAndText {...(this.props as ImageAndTextProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ImageAndText {...(this.props as ImageAndTextProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ImageAndTextProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
        label: () => {
            return this.container.innerHTML;
        },
    };
}
