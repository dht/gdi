import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LocalGallery, LocalGalleryProps } from './LocalGallery';
import { BaseComponentDriver } from 'testing-base';

export class LocalGalleryDriver extends BaseComponentDriver {
    private props: Partial<LocalGalleryProps> = {
    };

    constructor() {
        super('LocalGallery');
    }

    when: any = {
        rendered: () => {
            render(<LocalGallery {...(this.props as LocalGalleryProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<LocalGallery {...(this.props as LocalGalleryProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<LocalGalleryProps>) => {
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
