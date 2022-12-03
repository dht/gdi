import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ImageUpload, ImageUploadProps } from './ImageUpload';
import { BaseComponentDriver } from 'testing-base';

export class ImageUploadDriver extends BaseComponentDriver {
    private props: Partial<ImageUploadProps> = {};

    constructor() {
        super('ImageUpload');
    }

    when: any = {
        rendered: () => {
            render(<ImageUpload {...(this.props as ImageUploadProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <ImageUpload {...(this.props as ImageUploadProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<ImageUploadProps>) => {
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
