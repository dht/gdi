import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ImageGallery, ImageGalleryProps } from './ImageGallery';
import { BaseComponentDriver } from 'testing-base';

export class ImageGalleryDriver extends BaseComponentDriver {
    private props: Partial<ImageGalleryProps> = {
    };

    constructor() {
        super('ImageGallery');
    }

    when: any = {
        rendered: () => {
            render(<ImageGallery {...(this.props as ImageGalleryProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<ImageGallery {...(this.props as ImageGalleryProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<ImageGalleryProps>) => {
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
