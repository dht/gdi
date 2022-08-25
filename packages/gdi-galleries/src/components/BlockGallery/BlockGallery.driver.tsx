import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BlockGallery, BlockGalleryProps } from './BlockGallery';
import { BaseComponentDriver } from 'testing-base';

export class BlockGalleryDriver extends BaseComponentDriver {
    private props: Partial<BlockGalleryProps> = {
    };

    constructor() {
        super('BlockGallery');
    }

    when: any = {
        rendered: () => {
            render(<BlockGallery {...(this.props as BlockGalleryProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.container);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<BlockGallery {...(this.props as BlockGalleryProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<BlockGalleryProps>) => {
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
