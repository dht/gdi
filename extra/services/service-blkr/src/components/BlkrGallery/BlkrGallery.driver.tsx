import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BlkrGallery, BlkrGalleryProps } from './BlkrGallery';
import { BaseComponentDriver } from 'testing-base';

export class BlkrGalleryDriver extends BaseComponentDriver {
    private props: Partial<BlkrGalleryProps> = {};

    constructor() {
        super('BlkrGallery');
    }

    when: any = {
        rendered: () => {
            render(<BlkrGallery {...(this.props as BlkrGalleryProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BlkrGallery {...(this.props as BlkrGalleryProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BlkrGalleryProps>) => {
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
