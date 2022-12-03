import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GalleryImages, GalleryImagesProps } from './GalleryImages';
import { BaseComponentDriver } from 'testing-base';

export class GalleryImagesDriver extends BaseComponentDriver {
    private props: Partial<GalleryImagesProps> = {};

    constructor() {
        super('GalleryImages');
    }

    when: any = {
        rendered: () => {
            render(<GalleryImages {...(this.props as GalleryImagesProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <GalleryImages {...(this.props as GalleryImagesProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<GalleryImagesProps>) => {
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
