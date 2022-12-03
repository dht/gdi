import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GenericGallery, GenericGalleryProps } from './GenericGallery';
import { BaseComponentDriver } from 'testing-base';

export class GenericGalleryDriver extends BaseComponentDriver {
    private props: Partial<GenericGalleryProps> = {};

    constructor() {
        super('GenericGallery');
    }

    when: any = {
        rendered: () => {
            render(<GenericGallery {...(this.props as GenericGalleryProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(
                <GenericGallery {...(this.props as GenericGalleryProps)} />
            );
        },
    };

    given: any = {
        props: (props: Partial<GenericGalleryProps>) => {
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
